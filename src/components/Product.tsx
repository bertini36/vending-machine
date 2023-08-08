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
import {buy as apiBuy} from '../app/api';
import {updateBalance} from '../app/redux/user';
import {decreaseStock} from '../app/redux/products';

export const Product = ({id, name, price, color, logo, stock}: ProductProps) => {
    const [playSound] = useSound(canmp3);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const buy = async () => {
        console.log("stock", stock);
        if (stock === 0) {
            showWarningNotification('There is no stock! 😢');
            return;
        }
        if (user.balance < price) {
            showWarningNotification('You don\'t have enough balance! 😢');
            return;
        }

        if (process.env.REACT_APP_ENABLE_SOUNDS === 'true') playSound();
        const payload = await apiBuy(id, user.username, user.balance, price, stock);
        dispatch(updateBalance(payload["new_balance"]));
        dispatch(decreaseStock(id));
        showSuccessNotification('Enjoy your drink! 🍻');
    };

    return (
        <Box onClick={buy}
             className={`${stock === 0 ? "sold-out" : "with-stock"}`}
             sx={{
                 '&:hover': {
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
