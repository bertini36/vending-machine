import Box from '@mui/material/Box';
import useSound from 'use-sound';
import canmp3 from "../sounds/can.mp3";

interface ProductProps {
	title: string;
	price: number;
	color: string;
	photo: string;
}

export const Product = ({ title, price, color, photo }: ProductProps) => {
	const [playSound] = useSound(canmp3);
	const performClick = () => {
		playSound();
	};
	return (
		<Box onClick={performClick}
			sx={{
			backgroundColor: '#fff',
			paddingTop: '5%',
			paddingBottom: '3%',
			borderRadius: '7px',
			height: '250px',
			cursor: 'pointer',
			'&:hover': {
				border: '2px solid',
				borderColor: color,
			},
		}}>
			<Box sx={{ fontSize: 21, fontWeight: 800, color: color }}>{ title }</Box>
			<Box sx={{ marginTop: '4%', marginBottom: '4%' }}>
				<img src={photo} style={{ width: '50%', height: '50%', alignSelf: 'center' }} alt={"logo"}/>
			</Box>
			<Box style={{fontSize: '30px', fontStyle: 'bold', color: color}}>
				<strong style={{ border: '2px solid', borderRadius: '30px', padding: 5}}>{ price }€</strong>
			</Box>
		</Box>
	)
}
