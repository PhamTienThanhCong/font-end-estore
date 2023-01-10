import { useState } from 'react';
import ButtonMore from '../../../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { SHIRT } from '../../ProductData';
import '../Shirt.css';

function Shirts() {
    const [visible, setVisible] = useState(6);
    document.title = 'Product | Áo sơ mi';
    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Áo sơ mi</h3>
            </div>
            <div className="shirt_inner">
                {SHIRT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
            <div className="button-show-more">
                <ButtonMore onClick={() => setVisible((prev) => prev + 6)} />
            </div>
        </div>
    );
}

export default Shirts;
