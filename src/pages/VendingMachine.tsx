import {Products} from '../components/Products'
import Grid from '@mui/material/Grid';
import {Controller} from '../components/Controller';
import {
    showErrorNotification,
} from '../app/notifications';
import {useNavigate} from 'react-router-dom';
import {
    fetchUser as apiFetchUser,
    performLogin as apiPerformLogin
} from "../app/api";
import {setUser} from "../app/redux/user";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const VendingMachine = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const performLogin = async (username: string) => {
        const loginOk = await apiPerformLogin(username);
        if (loginOk) {
            const user = await apiFetchUser(username);
            dispatch(setUser(user));
        }
    };

    useEffect(() => {
        const username = localStorage.getItem('username');
        console.log("username", username);
        if (username) {
            performLogin(username);
        } else {
            showErrorNotification('You must be logged in to access this page! 🙏');
            navigate('/');
        }
    });

    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(90deg, #D6FF7F, #00B3CC)`,
                textAlign: 'center',
            }}
        >
            <h1>🍺 ABACUM VENDING MACHINE 🍺</h1>

            <Grid container spacing={2}>
                <Grid item lg={8} md={6} sm={12} xs={12}>
                    <Products/>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Controller/>
                </Grid>
            </Grid>
        </Grid>
    )
}
