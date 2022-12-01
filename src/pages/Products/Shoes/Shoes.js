import { useState } from 'react';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import { SHOES_DATA } from '../ProductData';
import './Shoes.css';

function Shoes() {
    const [visible, setVisible] = useState(38);

    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3>Giày</h3>
            </div>
            <div className="shoes_inner">
                {SHOES_DATA.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Shoes;
