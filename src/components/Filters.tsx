import React from 'react';
import backArrow from '../assets/images/left.svg';

const Filters = () => {

    return (
        <div className="filters">
            <div className="filters-headers">
                <a href="/">
                    <img src={backArrow} alt="Auto Shop" title="Auto Shop" className="header-arrow" />
                    <span className="header-back">Filters</span>
                </a>
                <a href="/plp" className="clear-all">Clear all</a>
            </div>
            <div className="filters-container">
                <ul className="filters-items">
                    <li>
                        <a href="/" className="filter-name">Farm Size</a>
                        <div className="filter-value">
                            <ul>
                                <li>
                                    <label className="gfg-input input-checkbox">Less Than One Acre
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">1-5 Acre
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">5-10 Acre
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">More than 10 Acre
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="/" className="filter-name">Experience</a>
                        <div className="filter-value">
                            <ul>
                                <li>
                                    <label className="gfg-input input-checkbox">Less Than One Year
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">1-5 Year Beginner
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">5-10 Year Intermediate
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">10 Years Expert
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="/" className="filter-name">Terrain</a>
                        <div className="filter-value">
                            <ul>
                                <li>
                                    <label className="gfg-input input-checkbox">Filter One
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="/" className="filter-name">Location</a>
                        <div className="filter-value">
                            <ul>
                                <li>
                                    <label className="gfg-input input-checkbox">Plains
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">Hills
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">Mountains
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">Mixed
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="/" className="filter-name">Crops</a>
                        <div className="filter-value">
                            <ul>
                                <li>
                                    <label className="gfg-input input-checkbox">
                                        Rice
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="gfg-input input-checkbox">
                                        Sugarcane
                                        <input type="checkbox" name="survey-step-1" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filters;
