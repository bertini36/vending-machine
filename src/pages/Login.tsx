import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

export const Login = () => {
    let username = '';

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
            }}
        >
            <Grid item xs={3}>
                <Box sx={{
                    borderRadius: '7px',
                    backgroundColor: 'white',
                    width: '400px',
                    textAlign: 'center',
                }}>
                    <Box sx={{paddingTop: '5%', paddingBottom: '1%'}}>
                        <h2>Welcome uwu 🍺</h2>
                    </Box>
                    <Box sx={{paddingBottom: '5%'}}>
                        <Input placeholder="Username" />
                    </Box>
                    <Box sx={{
                        marginBottom: '5%',
                        backgroundColor: '#eab308',
                        fontSize: 20,
                        cursor: 'pointer',
                        paddingY: '1%',
                        '&:hover': {
                            backgroundColor: '#d97706',
                        },
                        color: 'white',
                    }}>
                        <strong>Login</strong>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}