import { Products } from '../components/Products'
import Grid from '@mui/material/Grid';
import { Controller } from '../components/Controller';

export const VendingMachine = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>🍺 ABACUM VENDING MACHINE 🍺</h1>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Products />
				</Grid>
				<Grid item xs={4}>
					<Controller />
				</Grid>
			</Grid>
		</div>
	)
}
