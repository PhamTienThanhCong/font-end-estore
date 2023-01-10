import { useState } from 'react';
import ButtonMore from '../../../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { T_SHIRT } from '../../ProductData';
import '../Shirt.css';

function TShirt() {
    const [visible, setVisible] = useState(6);
    document.title = 'Product | Áo thun';
    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Áo thun</h3>
            </div>
            <div className="shirt_inner">
                {T_SHIRT.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
            <div className="button-show-more">
                <ButtonMore onClick={() => setVisible((prev) => prev + 6)} />
            </div>
        </div>
    );
}

export default TShirt;
