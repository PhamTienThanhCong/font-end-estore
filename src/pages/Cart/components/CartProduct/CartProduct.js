import { useState } from 'react';

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
            <td>
                <div className="product_count">
                    <span className="input-number-decrement" onClick={() => changeQuantity('minus')}>
                        <i className="ti-minus"></i>
                    </span>
                    <input className="input-number" type="text" value={quantity} min="0" max="10" />
                    <span className="input-number-increment" onClick={() => changeQuantity('add')}>
                        <i className="ti-plus"></i>
                    </span>
                </div>
            </td>
            <td>
                <h5>${totalPrice}</h5>
            </td>
        </tr>
    );
}
