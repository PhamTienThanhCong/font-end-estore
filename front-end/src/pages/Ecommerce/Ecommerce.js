import React from 'react';
import './Ecommerce.css';
import { useEffect } from 'react';
import background from './ecommerce.jpeg'
import { useTranslation } from "react-i18next";

function Ecommerce() {
    const { t } = useTranslation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="ecommerce-page">
        <div className="ecommerce-image">
            <img src={background}/>
        </div>

        <div className="container ecommerce-description">
            <div className="container--medium">
                <p>
                    {t('ecommerce.content1')}
                </p>
                    
                <p>
                    {t('ecommerce.content2')}
                </p>
                    
                <p>
                    {t('ecommerce.content3')}
                </p>
                <p>
                    {t('ecommerce.content4')}                
                </p>
                <p>
                    {t('ecommerce.content5')}                
                </p>
                <p>
                    {t('ecommerce.content6')}       
                </p>
            </div> 
        </div>



    </div>
  );
}
export default Ecommerce;