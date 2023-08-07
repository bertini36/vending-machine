import {Products} from '../components/Products'
import Grid from '@mui/material/Grid';
import {Controller} from '../components/Controller';

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
            <h1>🍺 ABACUM VENDING MACHINE 🍺</h1>

            <Grid container spacing={2}>
                <Grid item lg={8} md={6} sm={12} xs={12}>
                    <Products/>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Controller/>
                </Grid>
            </Grid>
        </Grid>
    )
}
