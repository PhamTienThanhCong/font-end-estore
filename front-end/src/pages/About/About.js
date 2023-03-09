import about_us from './img/about_us.jpg';
import feature_icon_1 from './img/feature_icon_1.svg';
import feature_icon_2 from './img/feature_icon_2.svg';
import feature_icon_3 from './img/feature_icon_3.svg';
import feature_icon_4 from './img/feature_icon_4.svg';
import client from './img/client.png';
import client1 from './img/client_1.png';
import client2 from './img/client_2.png';

import { useEffect } from 'react';

function About() {
    document.title = 'About';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <div class="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'blue', paddingTop: 50 }}>About</h1>
            </div>

            <section class="about_us padding_top" style={{ paddingTop: 50 }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="about_us_content">
                                <h5>The purpose of the shop was born?</h5>
                                <h3>
                                    Shop was born with the desire to become an example of the US RESPONSIBILITY BUSINESS model
                                    by doing both a methodical, profitable business and at the same time bringing great value
                                    practical and long-term value for customers, employees, partners, community,
                                    society and for shareholders
                                
                                </h3>
                                <div class="about_us_video" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={about_us} alt="#" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature_part section_padding">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                            <div class="feature_part_tittle">
                                <h3>Shop's customer service story</h3>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_content">
                                <p>
                                    At Shop, we believe that selling a package is selling an entire buying experience
                                    shop. Coolmate has the hope of becoming a typical customer-oriented brand
                                    deeply in Vietnam. With the desire to contribute a small part to the change received
                                    knowledge of businesses in bringing better experiences to customers
                                    products, especially in the field of E-Commerce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_1} alt="#" />
                                <h4>Credit card support</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_2} alt="#" />
                                <h4>Shopping Online</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_3} alt="#" />
                                <h4>Free Shipping</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_4} alt="#" />
                                <h4>Products With Gift</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="client_review">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="client_review_slider owl-carousel">
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client1} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client2} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="subscribe_part section_padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="subscribe_part_content">
                                <h2>Get promotions & updates!</h2>
                                <p>
                                    Seamlessly empower fully researched growth strategies and interoperable internal or
                                    “organic” sources credibly innovate granular internal .
                                </p>
                                <div class="subscribe_form">
                                    <input type="email" placeholder="Enter your mail" />
                                    <a href="#" class="btn_1">
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
