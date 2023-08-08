import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import {
    performLogin as apiPerformLogin,
    fetchUser as apiFetchUser
} from '../app/api';
import {useDispatch} from 'react-redux';
import {setUser} from '../app/redux/user';
import {useNavigate} from 'react-router-dom';
import {
    showSuccessNotification,
    showWarningNotification
} from '../app/notifications';

export const Login = () => {
    const [username, setUsername] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const performLogin = async () => {
        if (username === '') {
            showWarningNotification('Please enter a username! 🙏');
            return;
        }

        const loginOk = await apiPerformLogin(username);
        if (loginOk) {
            const user = await apiFetchUser(username);
            dispatch(setUser(user));
            localStorage.setItem('username', user.username);
            navigate('/vending-machine');
            showSuccessNotification(`Welcome ${user.first_name} ${user.last_name}!`);
        }
    };

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
            }}
        >
            <Grid item xs={3}>
                <Box sx={{
                    borderRadius: '7px',
                    backgroundColor: 'white',
                    width: '400px',
                    textAlign: 'center',
                }}>
                    <Box sx={{paddingTop: '5%', paddingBottom: '1%'}}>
                        <h2>Welcome uwu 🍺</h2>
                    </Box>
                    <Box sx={{paddingBottom: '5%'}}>
                        <Input
                            value={username}
                            onChange={handleInputChange}
                            placeholder='Username'/>
                    </Box>
                    <Box id={'login-button'}
                        onClick={performLogin}
                        sx={{
                            marginBottom: '5%',
                            backgroundColor: '#eab308',
                            fontSize: 20,
                            cursor: 'pointer',
                            paddingY: '1%',
                            '&:hover': {
                                backgroundColor: '#d97706',
                            },
                            color: 'white',
                        }}>
                        <strong>Login</strong>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}