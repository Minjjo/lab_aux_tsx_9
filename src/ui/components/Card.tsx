import React from "react";
import { useEffect, useState } from "react";
import { url } from "../../async/services/getData" 
import { Product } from "../../ui/components/Product";
export const Card: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        fetch(`${url}`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);
    return (
        <div style={styles.card}>
            {product ?(
                <>
                    <p style={styles.title}> {product.title}</p>
                    <p style={styles.description}>{product.description}</p>
                    <p style={styles.price}>{product.price}</p>
                </>
            ): <p>Cargando</p>}
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