import React from 'react';
import hero1 from '../assets/images/home/1.jpeg';
import hero2 from '../assets/images/home/seeds.jpeg';
import cat1 from '../assets/images/Image_26.png';
import cat2 from '../assets/images/Mask_Group_8.png';
import cat3 from '../assets/images/Mask_Group_5.png';
import tractor from '../assets/images/home/tractor.jpeg';
import tractor1 from '../assets/images/home/tractor1.jpg';
import greensystem from '../assets/images/home/img1.jpeg';
import crop1 from '../assets/images/home/crop1.jpg';
import crop2 from '../assets/images/home/crop2.jpg';
import crop from '../assets/images/home/crop.jpg';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [{ img: crop1, label: "Sugar cane" }, { img: crop2, label: "Wheat" },
{ img: crop, label: "Rice" }, { img: crop2, label: "Wheat" },
{ img: crop1, label: "Sugar cane" }, { img: crop, label: "Rice" }]

const home = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        arrows:false
    };

    return (
        <div>

            <section className="hero">
                <div className="hero-image">
                    <img src={hero1} />
                    <div className="hero-content hero-content--less">
                        <div className="hero-overlay bottom">
                            <h1 className="hero-bigtext">Empower your farming</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section className="product-selector">
                <a href="/step1" className="product-selector--link icon">Product Selector</a>
            </section>

            <section className="categories">
                <h6>Categories</h6>
                <div className="categories-container">
                    <div className="categories-card">
                        <div className="categories-name">Tractors</div>
                        <div className="categories-img">
                            <img src={cat1} alt="Tractors" title="Tractors" />
                        </div>
                    </div>

                    <div className="categories-card">
                        <div className="categories-name reverse">Harvesters</div>
                        <div className="categories-img reverse">
                            <img src={cat1} alt="Tractors" title="Tractors" />
                        </div>
                    </div>

                    <div className="categories-card">
                        <div className="categories-name">Implements</div>
                        <div className="categories-img">
                            <img src={cat3} alt="Tractors" title="Tractors" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div className="hero-image">
                    <img src={hero2} />
                    <div className="hero-content">
                        <div className="hero-overlay hero-overlay__educational">
                            <h2 className="hero-bigtext">Educational</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <a href="/" className="btn btn-yellow btn__right">Learn more</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="hero">
                <div className="hero-image">
                    <img src={tractor} />
                    <div className="hero-content tractor-of-the-week">
                        <h2 className="hero-bigtext icon icon-arrow">Farmtrac Champion 39 Tractor</h2>
                        <div className="hero-overlay opacity1 bottom">
                            <h3 className="hero-bigtext medium left">Tractor of the week</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section className="carousel container home">
                <p>Products by Crop</p>
                <Slider {...settings}>
                    {sliderData.map((data) => <div className="carousel">
                        <img src={data.img} />
                        <div className="carousel-container">
                            <span className="carousel-text">{data.label}</span>
                        </div>
                    </div>)}
                </Slider>
            </section>



            <section className="hero">
                <div className="hero-image">
                    <img src={greensystem} />
                    <div className="hero-content tractor-of-the-week">
                        <h2 className="hero-bigtext icon icon-arrow">Green System Cultivator</h2>
                        <div className="hero-overlay opacity1 bottom">
                            <h3 className="hero-bigtext medium left">Tractor of the week</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div className="hero-image">
                    <img src={cat3} />
                    <div className="hero-content">
                        <div className="hero-overlay hero-overlay__educational">
                            <h2 className="hero-bigtext">Find Dealer</h2>
                            <div className="search-dealer">
                                <input type="text" name="" value="" placeholder="Search by pin or name" />
                            </div>
                            <div className="goto-dealer icon">Go to dealer page</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default home;