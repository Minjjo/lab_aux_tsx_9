import { useEffect, useState } from "react";
import {randomProductId} from "../../async/services/getData";
export const Card = () => {
    const [product, setProducts] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${randomProductId()}`)
        .then(res => res.json())
        .then(data => {setProducts(data)})
    }, []);
    return (
        <div style={styles.card}>
            <p style={styles.title}>{product.title}</p>
            <p style={styles.description}>Descripción: {product.description}</p>
            <p style={styles.price}>USD$: {product.price}</p>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        marginBottom: '5px',
    },
    price: {
        fontSize: '16px',
        color: 'green',
    }
};