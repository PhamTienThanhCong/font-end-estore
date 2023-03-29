import logo_footer from './logo2_footer.png';
import HotTag from './Components/HotTag';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Quick_Links = [
    {
        name: 'About',
        to: '/about',
    },
    {
        name: 'Offers & Discounts',
        to: '/about',
    },
    {
        name: 'Get Coupon',
        to: '/about',
    },
    {
        name: 'Contact Us',
        to: '/contact',
    },
];

const New_Products = [
    {
        name: 'Woman Cloth',
        to: '/productType/shirt',
    },
    {
        name: 'Fashion Accessories',
        to: '/productType/shoes',
    },
    {
        name: 'Man Accessories',
        to: '/productType/hat',
    },
    {
        name: 'Rubber made Toys',
        to: '/productType/shoes',
    },
];

const Supports = [
    {
        name: 'Frequently Asked Questions',
        to: '/about',
    },
    {
        name: 'Terms & Conditions',
        to: '/about',
    },
    {
        name: 'Privacy Policy',
        to: '/about',
    },
    {
        name: 'Report a Payment Issue',
        to: '/contact',
    },
];

const description = 'DEVELOPMENT OF MODERN WEB APPLICATION';
const descriptions = 'NGU0120 - NGUYEN THANH TUAN';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="">
                                            <a href="#">
                                                <img style={{ height: '70px' }} src={logo_footer} alt=""></img>
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>{description}</p>
                                                <p>{descriptions}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <HotTag name="Quick Links" tags={Quick_Links} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <HotTag name="New Products" tags={New_Products} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <HotTag name="Supports" tags={Supports} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7">
                                <div className="footer-copy-right">
                                    <p>Copyright &copy; 2023</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5">
                                <div className="footer-copy-right f-right">
                                    <div className="footer-social">
                                        <Link to="#">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link to="#">
                                            <i className="fas fa-globe"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
