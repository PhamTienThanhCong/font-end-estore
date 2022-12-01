import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { SHIRT } from '../../ProductData';
import '../Shirt.css';

function Shirts() {
    const [visible, setVisible] = useState(38);

    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3>Áo sơ mi</h3>
            </div>
            <div className="shirt_inner">
                {SHIRT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Shirts;
