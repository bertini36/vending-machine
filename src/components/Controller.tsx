import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ControllerButton} from './ControllerButton';
import React from 'react';
import useSound from 'use-sound';
import coinsmp3 from '../app/sounds/coins.mp3';
import {refundBalance as apiRefundBalance} from '../app/api';
import type {RootState} from '../app/store';
import {useSelector} from 'react-redux';
import {updateBalance} from '../app/redux/user';
import {showWarningNotification} from '../app/notifications';
import {useDispatch} from 'react-redux';


export const Controller = () => {
    const [playSound] = useSound(coinsmp3);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const refundBalance = async () => {
        if (user.balance === 0) {
            showWarningNotification('You have no money to refund! 🤷‍♂️');
            return;
        }

        if (process.env.REACT_APP_ENABLE_SOUNDS === 'true') playSound();
        const refunded = await apiRefundBalance(user.username);
        if (refunded)
            dispatch(updateBalance(0));
    };

    return (
        <div>
            <p style={{
                fontSize: 25,
                color: 'white'
            }}>Hey <strong>{user.first_name} {user.last_name}</strong>! Let's
                drink something!</p>
            <Box id='controller' sx={{
                backgroundColor: 'white',
                paddingX: '5%',
                paddingY: '2%',
            }}>
                <p style={{fontSize: 20}}>Give me some money! 🌚</p>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ControllerButton value={0.5}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={1.0}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={2.0}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={5.0}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={10.0}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={50.0}/>
                    </Grid>
                </Grid>
                <Box>
                    <p style={{fontSize: 20}}>Current balance: <strong
                        style={{color: '#00B3CC'}}>{user.balance}€ 💰</strong>
                    </p>
                </Box>
                <Grid container spacing={0} direction='column'
                      alignItems='center' justifyContent='center'>
                    <Box id='refund-button'
                         onClick={refundBalance}
                         sx={{
                             backgroundColor: '#dc2626',
                             color: 'white',
                             fontSize: 20,
                             paddingX: '2%',
                             paddingY: '1%',
                             borderRadius: '7px',
                             cursor: 'pointer',
                             width: '15%',
                             alignSelf: 'center',
                             '&:hover': {
                                 backgroundColor: '#b91c1c',
                             },
                         }}>
                        Refund
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}