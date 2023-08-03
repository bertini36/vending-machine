import { Product } from './Product'
import Box from "@mui/material/Box";

export const Products = () => {
	return (
		<Box>
			<Product title='Estrella Damm' price={2} />
			<Product title='Estrella Galicia' price={2.50} />
		</Box>
	)
}