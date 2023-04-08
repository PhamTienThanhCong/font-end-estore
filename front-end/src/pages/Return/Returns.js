import React from 'react';
import './Returns.css';
import image from '../../assets/img/200w.gif';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Returns() {
  const {t} = useTranslation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="return-page">
      <section className="return-sections return-transparent">
        <div className="container--medium">
          <div className="grid grid-twocolumns grid-center">
            <div className="grid-column ">
              <div className="return-content">
                <h1 className="return-heading">
                {t('return.content1')}

                  <br/>
                  <span>
                    <b>60 {t('slide.content8')}</b>
                  </span>
                </h1>

                <p className="return-content">
                {t('return.content3')}
                </p>
                <div className="grid">
                  <div className="grid-column">
                    <span className="return-number">0$</span>
                    <span>{t('carttable.price')}</span>
                  </div>
                  <div className="grid-column">
                    <span className="return-number">0</span>
                    <span>{t('return.content3')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-column ">
              <img src="https://mcdn.coolmate.me/image/June2022/mceclip0_76.png" />
            </div>
          </div>
        </div>
      </section>

      <section class="return-sections ldp-policy">
        <div class="container container--medium">
            <div class="grid grid--aligned-center ">
                <div class="grid-column  eight-twelfths mobile--one-whole">
                    <p class="ldp-policy__caption">
                    {t('return.content4')}
                    </p> 
                    
                    <div class="ldp-policy__heading">
                        <h2 class="ldp-heading">
                            60 {t('slide.content8')}
                        </h2>
                    </div> 
                    
                    <h5 class="ldp-policy__title">
                        with <span>0$</span> {t('carttable.price')} and <span>0</span> {t('return.content3')}
                    </h5> 
                    
                    <div class="ldp-policy__description">
                        <p>
                        {t('return.content5')}

                        </p> 
                        
                        <ul>
                            <li>
                                <p>
                                {t('return.content6')}

                                </p>
                            </li> 
                            
                            <li>
                                <p>
                                {t('return.content7')}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div> 
                
                <div class="grid-column  four-twelfths mobile--one-whole">
                    <div class="ldp-banner">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </section> 
    </div>
  );
}
export default Returns;