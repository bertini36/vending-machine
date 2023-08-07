import Box from '@mui/material/Box';
import useSound from 'use-sound';
import canmp3 from '../app/sounds/can.mp3';
import {ProductProps} from '../app/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store';
import {
    showSuccessNotification,
    showWarningNotification
} from '../app/notifications';
import {subtractBalance as apiSubtractBalance} from '../app/api';
import {updateBalance} from '../app/redux/user';

export const Product = ({name, price, color, logo}: ProductProps) => {
    const [playSound] = useSound(canmp3);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const subtractBalance = async () => {
        if (user.balance < price) {
            showWarningNotification('You don\'t have enough balance! 😢');
            return;
        }

        if (process.env.REACT_APP_ENABLE_SOUNDS === 'true') playSound();
        const balance = await apiSubtractBalance(user.username, user.balance, price);
        dispatch(updateBalance(balance));
        showSuccessNotification('Enjoy your drink! 🍻');
    };

    return (
        <Box onClick={subtractBalance}
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
