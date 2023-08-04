import { Products } from '../components/Products'
import Grid from '@mui/material/Grid';
import { Controller } from '../components/Controller';

export const VendingMachine = () => {
	return (
		<Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(90deg, #D6FF7F, #00B3CC)`,
				textAlign: 'center',
            }}
        >
			<h1 style={{color: 'white', marginTop: 0, paddingTop: '3%'}}>🍺 ABACUM VENDING MACHINE 🍺</h1>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Products />
				</Grid>
				<Grid item xs={4}>
					<Controller />
				</Grid>
			</Grid>
		</Grid>
	)
}
