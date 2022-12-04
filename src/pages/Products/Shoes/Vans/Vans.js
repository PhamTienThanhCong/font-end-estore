import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { VANS_DATA } from '../../ProductData';
import '../Shoes.css';

function Vans() {
    const [visible, setVisible] = useState(38);
    document.title = 'Product | Giày Vans';
    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3 style={{ color: 'blue' }}>Giày Vans</h3>
            </div>
            <div className="shoes_inner">
                {VANS_DATA.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Vans;
