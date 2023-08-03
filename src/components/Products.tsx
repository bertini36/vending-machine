import { Product } from './Product'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const Products = () => {
	return (
		<Box sx={{
			backgroundImage: `linear-gradient(90deg, #D6FF7F, #00B3CC)`,
			borderRadius: '7px',
			paddingX: '5%',
			paddingY: '2%',
			marginX: '2%',
		}}>
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<Product title='Rosa Blanca' price={3} color={"#22d3ee"} photo={'logos/rosa.png'}/>
				</Grid>
				<Grid item xs={4}>
					<Product title='Estrella Damm' price={1} color={"#dc2626"} photo={'logos/damm.png'}/>
				</Grid>
				<Grid item xs={4}>
					<Product title='Estrella Galicia' price={2} color={"#171717"} photo={'logos/galicia.png'}/>
				</Grid>
				<Grid item xs={4}>
					<Product title='1906' price={3} color={"#d97706"} photo={'logos/1906.jpeg'}/>
				</Grid>
			</Grid>
		</Box>
	)
}