import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './CartProduct.css';

export default function CartProduct(props) {
    const [totalPrice, setTotalPrice] = useState(props.price * props.quantity);
    const [quantity, setQuantity] = useState(props.quantity);

    const changeQuantity = (type) => {
        console.log(type);
        if (type === 'minus') {
            if (quantity > 1) {
                setTotalPrice(totalPrice - props.price);
                setQuantity(quantity - 1);
            }
        } else {
            if (quantity < 10) {
                setTotalPrice(totalPrice + props.price);
                setQuantity(quantity + 1);
            }
        }
    };

    return (
        <tr key={props.id}>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="media-body">
                        <p>{props.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${props.price}</h5>
            </td>
            <td style={{ textAlign: 'center' }}>
                <div className="count-product">
                    <div onClick={() => changeQuantity('minus')} className="sub-btn">
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <span className="product_quantity">{quantity}</span>
                    <div onClick={() => changeQuantity('plus')} className="add-btn">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </td>
            <td>
                <h5>${totalPrice}</h5>
            </td>
        </tr>
    );
}
