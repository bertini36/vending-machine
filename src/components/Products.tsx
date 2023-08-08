import {Product} from './Product'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useEffect} from 'react';
import {fetchProducts as apiFetchProducts} from '../app/api';
import {ProductProps} from '../app/interfaces';
import {setProducts} from '../app/redux/products';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store';

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);

    const fetchProducts = async () => {
        dispatch(setProducts(await apiFetchProducts()));
    };

    useEffect(() => {
        if (products.size === 0)
            fetchProducts();
    });

    return (
        <Box sx={{
            borderRadius: '7px',
            paddingX: '5%',
            paddingY: '2%',
        }}>
            <Grid container spacing={4}>
                {Array.from(products.values()).map((product: ProductProps) => (
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Product
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            color={product.color}
                            logo={product.logo}
                            stock={product.stock}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}