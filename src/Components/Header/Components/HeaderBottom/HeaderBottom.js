import { Link } from 'react-router-dom';
import logo from "./logo.png";

export default function HeaderBottom() {
    return (
        <div className="header-bottom  header-sticky">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                        <div className="logo">
                            <Link to="">
                                <img src={logo} alt="" />
                            </Link>
                                
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">

                        <div className="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="Catagori">Catagori</Link>
                                    </li>
                                    <li className="hot"><Link to="#">Latest</Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="product-list"> Product list</Link>
                                            </li>
                                            <li>
                                                <Link to="product-details"> Product Details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Blog</Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-detail">Blog Details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Pages</Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/card">Card</Link>
                                            </li>
                                            <li>
                                                <Link to="">Element</Link>
                                            </li>
                                            <li>
                                                <Link to="">About</Link>
                                            </li>
                                            <li>
                                                <Link to="">Confirmation</Link>
                                            </li>
                                            <li>
                                                <Link to="">Shopping Cart</Link>
                                            </li>
                                            <li>
                                                <Link to="">Product Checkout</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                            <li className="d-none d-xl-block">
                                <form className="form-box f-right ">
                                    <input type="text" name="Search" placeholder="Search products" />
                                    <div className="search-icon">
                                        <i className="fas fa-search special-tag"></i>
                                    </div>
                                </form>
                            </li>
                            <li className=" d-none d-xl-block">
                                <div className="favorit-items">
                                    <i className="far fa-heart"></i>
                                </div>
                            </li>
                            <li>
                                <div className="shopping-card">
                                    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                                </div>
                            </li>
                            <li className="d-none d-lg-block"> <Link to="/login" className='btn header-btn'>Sign in</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}