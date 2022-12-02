import about_us_video from './img/about_us_video.png';
import feature_icon_1 from './img/feature_icon_1.svg';
import feature_icon_2 from './img/feature_icon_2.svg';
import feature_icon_3 from './img/feature_icon_3.svg';
import feature_icon_4 from './img/feature_icon_4.svg';
import client from './img/client.png';
import client1 from './img/client_1.png';
import client2 from './img/client_2.png';

function About() {
    return (
        <div>
            <div class="slider-area " style={{ textAlign: 'center' }}>
                <h1>About</h1>
            </div>

            <section class="about_us padding_top" style={{ paddingTop: 50 }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="about_us_content">
                                <h5>Our Mission</h5>
                                <h3>
                                    Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                    Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                                </h3>
                                <div class="about_us_video">
                                    <img src={about_us_video} alt="#" class="img-fluid" />
                                    <a
                                        class="about_video_icon popup-youtube"
                                        href="https://www.youtube.com/watch?v=DWHB6nTyKDI"
                                    ></a>
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
                                <h3>Credibly innovate granular internal or organic sources whereas standards.</h3>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_content">
                                <p>
                                    Seamlessly empower fully researched growth strategies and interoperable internal or
                                    “organic” sources. Credibly innovate granular internal or “organic” sources whereas
                                    high standards in web-readiness.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_1} alt="#" />
                                <h4>Credit Card Support</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_2} alt="#" />
                                <h4>Online Order</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_3} alt="#" />
                                <h4>Free Delivery</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_4} alt="#" />
                                <h4>Product with Gift</h4>
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
