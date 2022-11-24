import { Link } from "react-router-dom";
import CartTable from "./components/CartTable/CartTable";

export default function Cart() {
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Card List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            
                            <CartTable />

                            <div className="checkout_btn_inner float-right">
                                <Link className="btn_1" href="#">Continue Shopping</Link>
                                <Link className="btn_1 checkout_btn_1" href="#">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}