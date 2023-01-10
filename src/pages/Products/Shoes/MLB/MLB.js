import { useState } from 'react';
import ButtonMore from '../../../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { MLB_DATA } from '../../ProductData';
import '../Shoes.css';

function MLB() {
    const [visible, setVisible] = useState(6);
    document.title = 'Product | Giày MLB';
    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Giày MLB</h3>
            </div>
            <div className="shoes_inner">
                {MLB_DATA.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
            <div className="button-show-more">
                <ButtonMore onClick={() => setVisible((prev) => prev + 6)} />
            </div>
        </div>
    );
}

export default MLB;
