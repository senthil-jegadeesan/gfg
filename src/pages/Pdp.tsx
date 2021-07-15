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

const pdp = () => {
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

                <div className="p-pdp-btns hide">
                    <a href="/" className="btn btn-white left column2">Description</a>
                    <a href="/" className="btn btn-white right column2 active">Configure</a>
                </div>

                <div className="p-pdp-btns">
                <a href="/" className="btn btn-primary full-width">Configure</a>
                </div>

                <div className="card variants hide">
                    <ul>
                        <li>
                            <span className="variants-img"><img src={variant1} /></span>
                            <span className="variants-name">Colors</span>
                        </li>

                        <li>
                            <span className="variants-img"><img src={variant2} /></span>
                            <span className="variants-name">Wheel</span>
                        </li>

                        <li>
                            <span className="variants-img"><img src={variant3} /></span>
                            <span className="variants-name">Implements</span>
                        </li>
                    </ul>
                </div>

                <div className="card p-pdp-education">
                    <h3>Educational</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae consequuntur expedita unde voluptatibus assumenda quis esse error necessitatibus non? Magni perspiciatis rem enim dolores dolorem amet voluptate velit, voluptatum blanditiis eveniet veniam consequatur expedita numquam, animi a veritatis? Inventore, similique.</p>
                    <div className="p-pdp-video">
                        <iframe width="100%" height="205" src="https://www.youtube.com/embed/wb1Tl96mCZU?start=2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo, quia nulla temporibus suscipit omnis officia molestias, dolore minus nihil recusandae consequuntur iusto fugit eveniet quae facere. Beatae eaque doloremque a omnis, odio, quo consectetur dolorem aliquid asperiores animi ex.</p>
                </div>

            </div>

            <footer className="footer subfooter">
                <a href="/pdp/variant-color/" className="btn btn-primary full-width">configure</a>
            </footer>
        </div>
    );
}
export default pdp;