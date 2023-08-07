import Grid from '@mui/material/Grid';

export const NotFound = () => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(90deg, #D6FF7F, #00B3CC)`,
            }}
        >
            <Grid item xs={3}>
                <img
                    src="https://media.tenor.com/N6hA2Al9eM4AAAAM/byuntear-baby-cry.gif"
                    style={{alignSelf: 'center'}} alt={'not found'}/>
                <h1 style={{textAlign: 'center'}}>GG</h1>
            </Grid>
        </Grid>
    )
}