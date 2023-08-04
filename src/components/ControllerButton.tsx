import Box from '@mui/material/Box';
import useSound from 'use-sound';
import coinmp3 from '../sounds/coin.mp3';

interface ControllerButtonProps {
    value: number,
    callback: any,
}

export const ControllerButton = ({value, callback}: ControllerButtonProps) => {
    const [playSound] = useSound(coinmp3);
    const performClick = () => {
        if (process.env.ENABLE_SOUNDS) playSound();
        callback();
    };

    return (
        <Box onClick={performClick}
             sx={{
                 backgroundColor: '#eab308',
                 fontSize: 20,
                 borderRadius: '7px',
                 cursor: 'pointer',
                 paddingY: '1%',
                 '&:hover': {
                     backgroundColor: "#d97706",
                 },
                 color: 'white',
             }}>

            <strong>{value}€</strong>
        </Box>
    )
}