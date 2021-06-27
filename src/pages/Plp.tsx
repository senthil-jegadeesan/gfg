import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
const Plp = () => {
    const [showFilters, setShowFilters] = useState(false);
    const onClick = () => setShowFilters(true);
    return (
        <div className="p-plp">
            <p className="p-plp-recommend">We Recommended some products for you.</p>
            <div className="p-plp-container">
                <div className="p-plp-placeholders">
                    <div className="p-plp-results">5 Results</div>
                    <div className="p-plp-filter icon" onClick={onClick}>Filter</div>
                </div>

                <div className="p-plp-cardcontainer">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    { showFilters ? <Filters /> : null }
                </div>
            </div>
        </div>
    );
}

export default Plp;