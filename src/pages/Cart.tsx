import React, { useState } from 'react';
import Product from "../components/product";

const Cart = () => {

    return (
        <div>
            <div className="cart">
                <div className="cart-container">
                    <div className="cart-cardcontainer">
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <div className="cart-totalcontainer">
                        <div className="cart-totalsubcontainer">
                            <div>Sub Total :</div>
                            <div>Charges :</div>
                            <div>Total :</div>
                        </div>
                        <div className="cart-totalsubcontainer">
                            <div>5606.00</div>
                            <div>50.00</div>
                            <div>5656.00</div>
                        </div>

                    </div>
                </div>

            </div>
            <footer className="footer subfooter">
                <a href="/" className="btn btn-secondary left column2">Back</a>
                <a href="/" className="btn btn-primary right column2">Checkout</a>
            </footer>
        </div>
    );
}

export default Cart;