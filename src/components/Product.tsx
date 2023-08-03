import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface ProductProps {
	title: string;
	price: number;
	color: string;
	photo: string;
}

export const Product = ({ title, price, color, photo }: ProductProps) => {
	return (
		<div style={{
			backgroundColor: '#fff',
			paddingTop: '5%',
			paddingBottom: '3%',
			borderRadius: '7px',
			height: '200px',
			border: '1px solid',
			borderColor: color,
			cursor: 'pointer',
		}}>
			<Box sx={{ fontSize: 21, fontWeight: 800, color: color }}>{ title }</Box>
			<Box sx={{ paddingTop: '4%' }}>
				<img src={photo} style={{ width: '50%', height: '50%', alignSelf: 'center' }} alt={"logo"}/>
			</Box>
			<Box style={{
				paddingTop: '3%',
				fontSize: '30px',
				color: color,
			}}>
				<span style={{ border: '1px solid', borderRadius: '30px', padding: 5}}>{ price }€</span>
			</Box>
		</div>
	)
}
