import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ControllerButton} from './ControllerButton';
import React from 'react';
import useSound from 'use-sound';
import coinsmp3 from '../sounds/coins.mp3';

export const Controller = () => {
    let user: string = "Guillem";
    const [balance, setBalance] = React.useState(0);
    const [playSound] = useSound(coinsmp3);
    const increaseBalance = (value: number) => {
        setBalance(balance + value);
    };
    const resetBalance = () => {
        if (process.env.ENABLE_SOUNDS) playSound();
        setBalance(0);
    };

    return (
        <div>
            <p style={{
                fontSize: 25,
                color: 'white'
            }}>Hey <strong>{user}</strong>! Let's drink something!</p>
            <Box sx={{
                backgroundColor: 'white',
                borderRadius: '7px',
                paddingX: '5%',
                paddingY: '2%',
                marginRight: '20px',
            }}>
                <p style={{fontSize: 20}}>Give me some money! 🌚</p>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ControllerButton value={0.5}
                                          callback={() => increaseBalance(0.5)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={1.0}
                                          callback={() => increaseBalance(1.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={2.0}
                                          callback={() => increaseBalance(2.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={5.0}
                                          callback={() => increaseBalance(5.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={10.0}
                                          callback={() => increaseBalance(10.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={50.0}
                                          callback={() => increaseBalance(50.0)}/>
                    </Grid>
                </Grid>
                <Box>
                    <p style={{fontSize: 20}}>Current balance: <strong
                        style={{color: '#00B3CC'}}>{balance}€ 💰</strong></p>
                </Box>
                <Grid container spacing={0} direction="column"
                      alignItems="center" justifyContent="center">
                    <Box onClick={resetBalance}
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
                                 backgroundColor: "#b91c1c",
                             },
                         }}>
                        Refund
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}