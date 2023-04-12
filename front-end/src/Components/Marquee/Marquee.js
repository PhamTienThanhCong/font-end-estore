import React from 'react';
import './Marquee.css';
import logo from '../Footer/logo2_footer.png'
import { useTranslation } from "react-i18next";

function Marquee() {
    const { t } = useTranslation();

  return (
    <div className="marquee-background">
        <div class="container">
            <div class="marquee-align">
                <div class="marquee-logo">
                    <img src={logo}/>
                </div> 
        
                <marquee>
                    <div class="marquee-content">
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span> 
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span>                         
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span>                         
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span>                         
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span>                         
                        <span>{t('marquee.content1')}</span> 
                        <span>{t('marquee.content2')}</span> 
                    </div>
                </marquee>
        
            </div>
        </div>
    </div>
  );
}
export default Marquee;

