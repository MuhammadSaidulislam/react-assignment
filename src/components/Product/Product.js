import React from 'react';
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Product = (props) => {
    // console.log(props);
    const { img, name, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p>${price}</p>
                
                <button 
                     className="main-button btn-primary"
                     onClick = {() => props.handleAddProduct(props.product)}
                > Add to cart</button>
            </div>
        </div>
    );
};

export default Product;