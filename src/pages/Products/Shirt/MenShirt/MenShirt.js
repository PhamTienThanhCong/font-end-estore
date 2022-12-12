import { useState } from 'react';
import ButtonMore from '../../../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { SHIRTS } from '../../ProductData';
import '../Shirt.css';

function MenShirt() {
    const [visible, setVisible] = useState(6);
    document.title = 'Product | Áo nam';
    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Áo nam</h3>
            </div>
            <div className="shirt_inner">
                {SHIRTS.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
                <ButtonMore onClick={() => setVisible((prev) => prev + 6)} />
            </div>
        </div>
    );
}

export default MenShirt;
