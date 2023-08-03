import { Products } from '../components/Products'
import Grid from "@mui/material/Grid";

export const VendingMachine = () => {
	return (
		<div style={{textAlign: 'center'}}>
			<h1>ABACUM VENDING MACHINE</h1>

			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Products />
				</Grid>
				<Grid item xs={4}>
					gg
				</Grid>
			</Grid>
		</div>
	)
}
