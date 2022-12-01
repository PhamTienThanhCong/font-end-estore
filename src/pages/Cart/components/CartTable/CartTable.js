import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import arrivel1 from './arrivel/arrivel_1.png';
import arrivel2 from './arrivel/arrivel_2.png';

const Carts = [
    {
        id: 1,
        name: 'Minimalistic shop for multipurpose use',
        price: 360,
        quantity: 1,
        image: arrivel1,
    },
    {
        id: 2,
        name: 'Minimalistic shop for womans',
        price: 160,
        quantity: 1,
        image: arrivel2,
    },
];

export default function CartTable() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {Carts.map((cart) => {
                    return (
                        <CartProduct
                            key={cart.id}
                            id={cart.id}
                            name={cart.name}
                            price={cart.price}
                            quantity={cart.quantity}
                            image={cart.image}
                        />
                    );
                })}
                <tr className="bottom_button">
                    <td>
                        <Link className="btn_1" href="#">
                            Update Cart
                        </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="cupon_text float-right">
                            <Link className="btn_1" href="#">
                                Close Coupon
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <h5>Subtotal</h5>
                    </td>
                    <td>
                        <h5>$2160.00</h5>
                    </td>
                </tr>
                <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td>
                        <h5>Shipping</h5>
                    </td>
                    <td>
                        <div className="shipping_box">
                            <ul className="list">
                                <li>
                                    Flat Rate: $5.00
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </li>
                                <li>
                                    Free Shipping
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </li>
                                <li>
                                    Flat Rate: $10.00
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </li>
                                <li className="active">
                                    Local Delivery: $2.00
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </li>
                            </ul>
                            <h6>
                                Calculate Shipping
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </h6>
                            <select className="shipping_select">
                                <option value="1">Viet nam</option>
                                <option value="2">Laos</option>
                                <option value="4">Campuchia</option>
                            </select>
                            <select className="shipping_select section_bg">
                                <option value="1">Ha Noi</option>
                                <option value="2">Vieng chan</option>
                                <option value="4">phnôm pêng</option>
                            </select>
                            <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                            <Link className="btn_1" href="#">
                                Update Details
                            </Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
