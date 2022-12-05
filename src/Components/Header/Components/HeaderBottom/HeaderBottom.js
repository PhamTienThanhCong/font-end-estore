import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from './logo.png';
import './HeaderBottom.css';
import { useSelector } from 'react-redux';

export default function HeaderBottom() {
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    const [searchValue, setSearchValue] = useState('');
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            navigate(`/product/search/keyword=${searchValue}`);
            setSearchValue('');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="header-bottom  header-sticky">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                        <div className="logo">
                            <Link to="/">
                                <img style={{ height: '80px' }} src={logo} alt="" />
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
                                        <Link to="/ao-nam">Áo</Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/ao-nam">Áo Nam</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-thun">Áo T-shirt</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-so-mi">Áo Sơ Mi</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-polo">Áo Polo</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-the-thao">Áo Thể Thao</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-khoac">Áo Khoác</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="hot">
                                        <Link to="/shoes">Giày</Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/shoes/nike">Nike</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/adidas">Adidas</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/vans">Vans</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/mlb">MLB</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/hat">Nón</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
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
                            <li className="d-none d-xl-block" style={{ marginTop: 9 }}>
                                <form className="form-box f-right " onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="Search"
                                        placeholder="Search"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                    <button
                                        className="search-icon"
                                        type="submit"
                                        style={{ border: 'none', backgroundColor: 'white' }}
                                    >
                                        <i className="fas fa-search special-tag"></i>
                                    </button>
                                </form>
                            </li>

                            <div
                                style={{ display: 'flex', alignItems: 'center', marginLeft: 12 }}
                                onClick={toggleTheme}
                            >
                                <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={35} />
                            </div>

                            <li className=" d-none d-xl-block" style={{ marginTop: 9 }}>
                                <div className="favorit-items">
                                    <i className="far fa-heart"></i>
                                </div>
                            </li>
                            <li style={{ marginTop: 9 }}>
                                <div className="shopping-card">
                                    <div className="count-product">{cart.length}</div>
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            </li>
                            <li className="d-none d-lg-block" style={{ marginTop: 9 }}>
                                {' '}
                                <Link to="/login" className="btn header-btn">
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
