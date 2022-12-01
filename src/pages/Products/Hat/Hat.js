import ProductItem from '../../../Components/ProductItem/ProductItem';
import { HAT_DATA } from '../ProductData';
import './Hat.css';

function Hat() {
    return (
        <div className="hat_container">
            <div className="hat_header">
                <h3>Mũ/Nón</h3>
            </div>
            <div className="hat_inner">
                {HAT_DATA.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Hat;
