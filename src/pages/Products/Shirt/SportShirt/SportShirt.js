import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { MENS_SHIRT, SPORTS_SHIRT } from '../../ProductData';
import '../Shirt.css';

function SportShirt() {
    const [visible, setVisible] = useState(38);

    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3>Áo thể thao</h3>
            </div>
            <div className="shirt_inner">
                {SPORTS_SHIRT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default SportShirt;
