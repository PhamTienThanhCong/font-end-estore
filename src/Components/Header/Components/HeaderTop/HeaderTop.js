import current from './current.png';
import { Link } from 'react-router-dom';

export default function HeaderTop(){
    return(
        <div className="header-top top-bg d-none d-lg-block">
            <div className="container-fluid">
                <div className="col-xl-12">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="header-info-left d-flex">
                            <div className="flag">
                                <img src={current} alt="current" />
                            </div>
                            <div className="select-this">
                                <form action="#">
                                    <div className="select-itms">
                                        <select name="select" id="select1">
                                            <option value="">USA</option>
                                            <option value="">SPN</option>
                                            <option value="">CDA</option>
                                            <option value="">USD</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <ul className="contact-now">
                                <li>+777 2345 7886</li>
                            </ul>
                        </div>
                        <div className="header-info-right">
                            <ul>
                                <li>
                                    <Link to="/login">My Account</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Shopping</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}