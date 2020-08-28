import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = parseFloat(total) + parseFloat(product.price);
    }
  

 
    return (
        <div>
            <h4 className="text-danger">Order Summary</h4>
            <p className="text-info">Items Ordered:{cart.length}</p>
            <p className="text-primary">Product Price:{total}</p>
         
        </div>
    );
};

export default Cart;