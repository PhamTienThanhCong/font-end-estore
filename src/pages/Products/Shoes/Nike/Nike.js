import { useState } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { NIKE_DATA } from '../../ProductData';
import '../Shoes.css';

function Nike() {
    const [visible, setVisible] = useState(38);

    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3>Giày Nike</h3>
            </div>
            <div className="shoes_inner">
                {NIKE_DATA.slice(0, visible).map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Nike;
