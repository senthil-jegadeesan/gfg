import React from 'react';
import variant1 from '../assets/images/color.svg';
import variant2 from '../assets/images/wheel.svg';
import variant3 from '../assets/images/Implements.svg';
import tractor from '../assets/images/home/tractor.jpeg';
import tractor1 from '../assets/images/home/tractor1.jpg';
import cat1 from '../assets/images/home/cat1.jpeg';
import cat2 from '../assets/images/home/cat2.jpeg';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Colorvariant = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    return (
        <div>
            <div className="carousel pdp">
                <Slider {...settings}>
                    <div className="p-pdp-slidercard">
                        <div className="card">
                            <img src={tractor} />
                        </div>
                    </div>
                    <div className="p-pdp-slidercard">
                        <div className="card">
                            <img src={tractor1} />
                        </div>
                    </div>
                    <div className="p-pdp-slidercard">
                        <div className="card">
                            <img src={cat1} />
                        </div>
                    </div>
                    <div className="p-pdp-slidercard">
                        <div className="card">
                            <img src={cat2} />
                        </div>
                    </div>

                </Slider>
            </div>
            <div className="p-pdp">

                <div className="p-pdp-details card">
                    <div className="name">5036D 36HP, 2100 RPM Tractor</div>
                    <div className="rating">
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span className="rated">&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <div className="price hide">Rs.4.5 Lakhs</div>
                </div>

                <div className="variants-wrapper">
                    <div className="title">Color</div>
                    <ul className="variants-wrapper--grid">
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div className="active" style={{background: '#b52121'}}></div>
                                <input type="checkbox" name="color-1" checked/>
                                <span className="checkmark"></span>
                            </label>
                            
                        </li>
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div style={{background: '#0086fb'}}></div>
                                <input type="checkbox" name="color-2" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div style={{background: '#07c489'}}></div>
                                <input type="checkbox" name="color-3" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div style={{background: '#fff700'}}></div>
                                <input type="checkbox" name="color-4" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div style={{background: '#c12090'}}></div>
                                <input type="checkbox" name="color-5" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="gfg-input input-checkbox">
                                <div style={{background: '#17a90e'}}></div>
                                <input type="checkbox" name="color-6" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>

                <footer className="footer subfooter">
                    <a href="/pdp/variant-tyre/" className="btn btn-primary full-width">configure</a>
                </footer>

            </div>
        </div>
    );
}
export default Colorvariant;