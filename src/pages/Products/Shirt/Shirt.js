import { useState } from 'react';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import { SHIRTS } from '../ProductData';
import './Shirt.css';

function Shirt() {
    const [visible, setVisible] = useState(12);

    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Giày</h3>
            </div>
            <div className="shirt_inner">
                {SHIRTS.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Shirt;
