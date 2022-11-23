import React from 'react'
import { Container } from 'react-bootstrap';
import { useState } from "react";

export default function ItemListContainer() {

    const [products, setProducts] = useState([])

        /* fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            }); */

    return (
        <Container className='main'>
            <h1 className='title'>Productos</h1>
            
            {products && products.map(product => (
                <>
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.prize}</p>
                        <img src={products.image} />
                    </div>
                </>
            )
            )}
        </Container>
    )
}
