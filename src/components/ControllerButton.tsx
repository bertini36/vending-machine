import Box from '@mui/material/Box';
import useSound from 'use-sound';
import coinmp3 from '../app/sounds/coin.mp3';
import {addBalance as apiAddBalance} from '../app/api';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';
import {updateBalance} from '../app/redux/user';
import {useDispatch} from 'react-redux';
import {ControllerButtonProps} from '../app/interfaces';


export const ControllerButton = ({value}: ControllerButtonProps) => {
    const [playSound] = useSound(coinmp3);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const addBalance = async () => {
        if (process.env.REACT_APP_ENABLE_SOUNDS === 'true') playSound();
        const new_balance = await apiAddBalance(user.username, user.balance, value);
        dispatch(updateBalance(new_balance));
    };

    return (
        <Box onClick={addBalance}
             sx={{
                 backgroundColor: '#eab308',
                 fontSize: 20,
                 borderRadius: '7px',
                 cursor: 'pointer',
                 paddingY: '1%',
                 '&:hover': {
                     backgroundColor: '#d97706',
                 },
                 color: 'white',
             }}>

            <strong>{value}€</strong>
        </Box>
    )
}