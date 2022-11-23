import { useEffect, useState } from "react";
import { ProductCard } from "../../Pages/Products/ProductCard";
import { Container, Row } from 'react-bootstrap';
import { GiShoppingCart  } from 'react-icons/gi';

export default function Cart() {
	const [cart, setCart] = useState([])

	return (

		<Container className='d-flex'>

			<GiShoppingCart style={{color: 'white', fontSize: '30px'}}/>
				{
					cart && cart.length > 0 ? <h4>Tu carrito: ({cart.length}) items</h4> : <h4>0</h4>
				}
				<div className="main-cart d-flex direction-column gap">
					{
						cart && cart.length > 0 ? cart.map(product => <ProductCard key={product.id} product={product} />) : ""
					}
				</div>
			</Container>



	)
}