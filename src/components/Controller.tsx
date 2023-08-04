import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ControllerButton } from "./ControllerButton";
import React from 'react';

export const Controller = () => {
    let user: string =  "Guillem";
    const [balance, setBalance] = React.useState(0);
    const increaseBalance = (value: number) => {
		setBalance(balance + value);
	};

    return (
        <div>
            <p style={{ fontSize: 25 }}>Hey <strong style={{ color: '#00B3CC' }}>{user}</strong>! Let's drink something!</p>
            <Box sx={{
                backgroundImage: `linear-gradient(0deg, #D6FF7F, #00B3CC)`,
                borderRadius: '7px',
                paddingX: '5%',
                paddingY: '2%',
			    marginRight: '20px',
            }}>
                <p style={{ fontSize: 20 }}>Give me some money! 🌚</p>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ControllerButton value={0.5} callback={() => increaseBalance(0.5)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={1.0} callback={() => increaseBalance(1.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={2.0} callback={() => increaseBalance(2.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={5.0} callback={() => increaseBalance(5.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={10.0} callback={() => increaseBalance(10.0)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerButton value={50.0} callback={() => increaseBalance(50.0)}/>
                    </Grid>
			    </Grid>
                <Box>
                    <p style={{ fontSize: 20 }}>Current balance: <strong style={{ color: '#00B3CC' }}>{balance}€ 💰</strong></p>
                </Box>
            </Box>
        </div>
    )
}