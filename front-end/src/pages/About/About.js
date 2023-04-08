import about_us from './img/about_us.jpg';
import feature_icon_1 from './img/feature_icon_1.svg';
import feature_icon_2 from './img/feature_icon_2.svg';
import feature_icon_3 from './img/feature_icon_3.svg';
import feature_icon_4 from './img/feature_icon_4.svg';
import client from './img/client2.jpeg';
import client1 from './img/client1.jpeg';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

function About() {
    const { t } = useTranslation();

    document.title = 'About';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <div class="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'black', paddingTop: 50 }}>{t('about.title')}</h1>
            </div>

            <section class="about_us padding_top" style={{ paddingTop: 50 }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="about_us_content">
                                <h5 style={{ color: 'black' }}>{t('about.content1')}</h5>
                                <h3>
                                    {t('about.content2')}                                
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
                                <h3>{t('about.content3')}</h3>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_content">
                                <p>
                                    {t('about.content4')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_1} alt="#" />
                                <h4>{t('about.icon1')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_2} alt="#" />
                                <h4>{t('about.icon2')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_3} alt="#" />
                                <h4>{t('about.icon3')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_4} alt="#" />
                                <h4>{t('about.icon4')}</h4>
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
                                        <img src={client} alt="1" />
                                    </div>
                                    <p>
                                        {t('about.client1')}
                                    </p>
                                    <h5>Nguyen Thanh Tuan</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client1} alt="2" />
                                    </div>
                                    <p>
                                        {t('about.client2')}
                                    </p>
                                    <h5>Nguyen Thi Nu</h5>
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
                                <h2>{t('about.subcribe1')}</h2>
                                <p>
                                    {t('about.subcribe2')}
                                </p>
                                <div class="subscribe_form">
                                    <input type="email" placeholder={t("about.email")} />
                                    <a href="#" class="btn_1">
                                        {t('about.subcribe3')}
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
