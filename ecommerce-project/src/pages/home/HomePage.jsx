import axios from 'axios';
import { useEffect,useState } from 'react';
import { Header } from '../../components/header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart }) {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const getHomedata = async () => {
            const response = await axios.get('/api/products');
                setProducts(response.data);
        };
        getHomedata();


    }, [])
    return (
        <>
            <title>Ecommerce-project</title>
            <Header cart={cart} />


            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}