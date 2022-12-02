import { Link } from 'react-router-dom';
import CartTable from './components/CartTable/CartTable';
import './Cart.css';

export default function Cart() {
    document.title = 'Cart';
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1>Cart List</h1>
            </div>

            <section className="cart_area section_padding" style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <CartTable />

                            <div className="checkout_btn_inner float-right pos-link">
                                <Link className="btn_1" to="/">
                                    Continue Shopping
                                </Link>

                                <Link className="btn_1 checkout_btn_1" to="#">
                                    Proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
