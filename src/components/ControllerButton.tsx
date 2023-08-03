import Box from '@mui/material/Box';
import useSound from 'use-sound';
import coinmp3 from '../sounds/coin.mp3';

interface ControllerButtonProps {value: number}

export const ControllerButton = ({ value }: ControllerButtonProps) => {
    const [playSound] = useSound(coinmp3);
    const performClick = () => {
		playSound();
	};
    return (
        <Box onClick={performClick}
            sx={{
            backgroundColor: '#eab308',
            fontSize: 20,
            borderRadius: '7px',
            cursor: 'pointer',
            '&:hover': {
				border: '2px solid',
				borderColor: "#f59e0b",
			},
        }}>

            {value}€
        </Box>
    )
}