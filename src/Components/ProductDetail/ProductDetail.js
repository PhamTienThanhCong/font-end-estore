import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../../pages/Products/ProductData';
import './ProductDetail.css';

function ProductDetail() {
    const location = useLocation();
    const productId = location.pathname.replace('/product/', '');
    const product = PRODUCTS.find((product) => product.id === productId);
    const features = product.features;
    const [quantity, setQuantity] = useState(1);
    const handleAdd = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleSub = () => {
        setQuantity((prev) => prev - 1);
    };
    return (
        <div className="detail_container">
            <div className="detail header">
                <div>Trang chủ / {productId}</div>
            </div>
            <div className="detail_inner">
                <div className="detail_left">
                    <img src={product.image} className="image_product" />
                </div>
                <div className="detal_right">
                    <h1 className="name_product">{product.nameProduct}</h1>
                    <div className="detal_ratting">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />({product.countOfRatting})
                    </div>
                    <div className="price">{product.price}đ</div>
                    <div className="add-to-cart">
                        <div className="quantity">
                            <div onClick={handleSub} className="sub-btn">
                                -
                            </div>
                            <span>{quantity}</span>
                            <div onClick={handleAdd} className="add-btn">
                                +
                            </div>
                        </div>
                        <div className="action">Thêm vào giỏ hàng</div>
                    </div>
                    <div className="feature">
                        <div className="feature_header">Đặc điểm nổi bật</div>
                        <div className="feature_content">
                            {features && features.map((feature) => <div className="feature_item">- {feature}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
