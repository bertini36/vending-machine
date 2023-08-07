import Box from '@mui/material/Box';
import useSound from 'use-sound';
import canmp3 from '../sounds/can.mp3';
import {ProductProps} from '../utils/interfaces';

export const Product = ({name, price, color, logo}: ProductProps) => {
    const [playSound] = useSound(canmp3);
    const performClick = () => {
        if (process.env.ENABLE_SOUNDS) playSound();
    };
    return (
        <Box onClick={performClick}
             sx={{
                 backgroundColor: '#fff',
                 paddingTop: '5%',
                 paddingBottom: '3%',
                 borderRadius: '7px',
                 height: '240px',
                 cursor: 'pointer',
                 border: '2px solid',
                 borderColor: 'transparent',
                 '&:hover': {
                     border: '2px solid',
                     borderColor: color,
                 },
             }}>
            <Box style={{
                fontSize: 21,
                fontWeight: 800,
                color: color
            }}>{name}</Box>
            <img
                src={logo}
                style={{
                    width: '40%',
                    height: '60%',
                    alignSelf: 'center',
                    marginTop: '4%',
                    marginBottom: '4%'
                }} alt={'logo'}/>
            <Box style={{fontSize: '30px', fontStyle: 'bold', color: color}}>
                <strong style={{
                    border: '2px solid',
                    borderRadius: '30px',
                    padding: 5
                }}>{price}€</strong>
            </Box>
        </Box>
    )
}
