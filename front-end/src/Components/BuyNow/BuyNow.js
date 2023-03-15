import "./BuyNow.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice';

function BuyNow({ open, product, setOpen }) {
    const [choseColor, setChoseColor] = useState('white');
    const colors = ['white', 'black', 'red', 'yellow'];
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);


    const handleColor = (color) => {
        if (choseColor !== color) {
            setChoseColor(color);
        }
    };
    const handleAdd = () => {
        if (quantity < 10) {
            setQuantity((prev) => prev + 1);
        }
    };
    const handleSub = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    // useEffect (() => {
    //     setChoseColor(product.colors[0]);
    // }, [product]);

    return (
        <div 
            className="buy-now"
            style={{
                display: open ? 'flex' : 'none',
            }}
        >
            <div className="container-buy-now">
                <div className="buy-now-header">
                    <h2>Buy Now</h2>
                    <button onClick={
                        () => {
                            setOpen(false);
                        }
                    } className="btn-close-buy-now">
                        close X
                    </button>
                </div>
                <div className="buy-now-body">
                    <div className="buy-now-body-left">
                        <div className="buy-now-body-left-img">
                            <img src={ product.image } alt="" />
                        </div>
                    </div>
                    <div className="buy-now-body-right">
                        <div className="buy-now-body-right-title">
                            <h3>
                                {product.nameProduct}
                            </h3>
                            <div className="price-product">
                                {product.price} USD
                            </div>
                            <div className="color-product">
                                <div className="title">Color:</div>
                                {colors &&
                                    colors.map((color, index) => (
                                        <span
                                            key={index}
                                            style={{ backgroundColor: color }}
                                            className={color === choseColor ? 'color-item choses-color' : 'color-item'}
                                            onClick={() => handleColor(color)}
                                        ></span>
                                    ))}
                            </div>
                            <div className="quantity-action">
                                quantity
                            </div>
                            <div className="add-to-cart">
                                <div className="quantity">
                                    <div onClick={handleSub} className="sub-product-btn">
                                        -
                                    </div>
                                    <span>{quantity}</span>
                                    <div onClick={handleAdd} className="add-product-btn">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div className="add-to-cart-btn">
                                <div
                                        className="action"
                                    onClick={() =>
                                        dispatch(
                                            addToCart({
                                                id: product.id,
                                                nameProduct: product.nameProduct,
                                                price: product.price,
                                                image: product.image,
                                                quantity: quantity,
                                            }),
                                        )
                                    }
                                    >
                                        Add To Cart
                                    </div>
                                    <div
                                        className="action"
                                        style={{
                                            marginLeft: '10px',
                                        }}
                                    // onClick={() =>
                                    //     dispatch(
                                    //         addToCart({
                                    //             id: productId,
                                    //             nameProduct: product.nameProduct,
                                    //             price: product.price,
                                    //             image: product.image,
                                    //             quantity: quantity,
                                    //         }),
                                    //     )
                                    // }
                                    >
                                        Buy now
                                    </div>
                                </div>
                            </div>
                        <div className="feature">
                        <div className="feature_header">Description</div>
                        <div className="feature_content">
                            {product.features &&
                                product.features.map((feature, index) => (
                                    <div key={index} className="feature_item">
                                        - {feature}
                                    </div>
                                ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyNow;