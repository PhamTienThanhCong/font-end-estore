import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { MENS_SHIRT, POLO_SHIRT } from '../../ProductData';
import '../Shirt.css';

function PoloShirt() {
    const [visible, setVisible] = useState(38);
    document.title = 'Product | Áo Polo';
    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue' }}>Áo polo</h3>
            </div>
            <div className="shirt_inner">
                {POLO_SHIRT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default PoloShirt;
