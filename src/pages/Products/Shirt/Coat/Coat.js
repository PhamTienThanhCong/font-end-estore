import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { COAT } from '../../ProductData';
import '../Shirt.css';

function Coat() {
    const [visible, setVisible] = useState(38);
    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3>Áo khoác</h3>
            </div>
            <div className="shirt_inner">
                {COAT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Coat;
