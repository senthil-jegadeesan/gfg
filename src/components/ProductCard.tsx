import React from 'react';
import prodImg from '../assets/images/home/tractor.jpeg';
import wheel from '../assets/images/wheel.svg';
const ProductCard = () => {
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
                <div className="productcard-variants">
                    <ul className="productcard-variants-container">
                        <li>
                            <span className="variant-icon">
                                <img src={wheel} />
                            </span>
                            <span className="variant-name">Compact</span>
                        </li>

                        <li>
                            <span className="variant-icon">
                                <img src={wheel} />
                            </span>
                            <span className="variant-name">Speed</span>
                        </li>

                        <li>
                            <span className="variant-icon">
                                <img src={wheel} />
                            </span>
                            <span className="variant-name">Suitable for Hills</span>
                        </li>

                        <li>
                            <span className="variant-icon">
                                <img src={wheel} />
                            </span>
                            <span className="variant-name">Power Steering</span>
                        </li>
                    </ul>
                </div>
                <div className="productcard-buttons">
                    <a href="/" className="btn btn-secondary column2 left">Talk to Dealer</a>
                    <a href="/" className="btn btn-primary column2 right">Buy Now</a>
                </div>
           </div>
        </div>
    );

}

export default ProductCard;