import {Product, ProductProps} from './Product'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import {api} from '../api';
import {showErrorNotification} from "../utils/notifications";

export const Products = () => {
    const [products, setProducts] = useState<[] | null>(null);

    const fetchProducts = async () => {
        try {
            setProducts(await api.fetchProducts());
        } catch (error) {
            showErrorNotification(`Error: {$error}`);
        }
    };

    useEffect(() => {
        if (products === null)
            fetchProducts();
    });

    if (products === null)
        return <div></div>

    else {
        return (
            <Box sx={{
                borderRadius: '7px',
                paddingX: '5%',
                paddingY: '2%',
                marginLeft: '20px',
            }}>
                <Grid container spacing={4}>
                    {products.map((product: ProductProps) => (
                        <Grid item xs={4}>
                            <Product
                                name={product.name}
                                price={product.price}
                                color={product.color}
                                logo={product.logo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}