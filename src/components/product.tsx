import React from 'react';
import prodImg from '../assets/images/home/tractor.jpeg';

const Product = () => {
    return (
        <div className="card productcard">
            <div className="productcard-container">
                <div className="productcard-img">
                    <img src={prodImg} alt="" title="" />
                </div>
                <div className="productcard-details">
                    <div className="title">
                        5036D 36HP, 2100 RPM Tractor
                    </div>
                    <div className="rating">
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span>&#9733;</span>
                    </div>

                    <div className="price">
                        Rs.4.5 Lakhs
                    </div>
                    <p className="shortdesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Product;