import { useState } from 'react';
import ButtonMore from '../../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import { HAT_DATA } from '../ProductData';
import './Hat.css';

function Hat() {
    const [visible, setVisible] = useState(6);
    document.title = 'Product | Mũ/Nón';
    return (
        <div className="hat_container">
            <div className="hat_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Mũ/Nón</h3>
            </div>
            <div className="hat_inner">
                {HAT_DATA.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
                <ButtonMore onClick={() => setVisible((prev) => prev + 6)} />
            </div>
        </div>
    );
}

export default Hat;
