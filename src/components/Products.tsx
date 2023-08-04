import {Product} from './Product'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import {api} from '../api';

export const Products = () => {
    const [products, setProducts] = useState<[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            setProducts(await api.fetchProducts());
        } catch (err) {
            setError(`Error: ${err}`);
        }
    };

    useEffect(() => {
        if (products === null)
            fetchProducts();
    });

    if (products === null)
        return <div>{error}</div>

    else {
        return (
            <Box sx={{
                borderRadius: '7px',
                paddingX: '5%',
                paddingY: '2%',
                marginLeft: '20px',
            }}>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={4}>
                            <Product
                                title={product["name"]}
                                price={product["price"]}
                                color={product["color"]}
                                photo={product["logo"]}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}