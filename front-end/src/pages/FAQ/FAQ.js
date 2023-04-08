import React from 'react';
import './FAQ.css';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="site-content page-faqs site-content--main">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="page__content">
          <h1 dir="ltr" style={{ textAlign: 'center' }}>
            {t('faq.content1')}
          </h1>
          <h2 dir="ltr">{t('faq.content2')}</h2>
          <h3 dir="ltr">{t('faq.content3')}</h3>
          <p dir="ltr">
            <span
              style={{
                fontFamily:
                  '"Segoe UI", SegoeuiPc, "San Francisco", "Helvetica Neue", Helvetica, "Lucida Grande", Roboto, Ubuntu, Tahoma, "Microsoft Sans Serif", Arial, sans-serif',
                fontSize: '15px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {t('faq.content4')}
            </span>
          </p>
          <p dir="ltr">
            <span
              style={{
                fontFamily:
                  '"Segoe UI", SegoeuiPc, "San Francisco", "Helvetica Neue", Helvetica, "Lucida Grande", Roboto, Ubuntu, Tahoma, "Microsoft Sans Serif", Arial, sans-serif',
                fontSize: '15px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {t('faq.content5')}
            </span>
          </p>
          <p dir="ltr">
            {t('faq.content6')}
          </p>
          <div className="info-box">
          {t('faq.content7')}
          </div>
          <p></p>
          <p dir="ltr">&nbsp;</p>
          <h3 dir="ltr">{t('faq.content8')}</h3>
          <p dir="ltr">
            {t('faq.content9')} <a href="https://www.facebook.com/coolmate.me">SGB</a> {t('faq.content20')}</p>
          <p dir="ltr">&nbsp;</p>
          <h3 dir="ltr">{t('faq.content10')}</h3>
          <p dir="ltr">
            {t('faq.content11')}
          </p>
          <p dir="ltr">&nbsp;</p>

              

          <h2 dir="ltr">{t('faq.content12')}</h2> 
                        <h3 dir="ltr">{t('faq.content13')}</h3> 
                        <p dir="ltr">{t('faq.content14')}</p> 
                        <p dir="ltr">{t('faq.content21')}</p> 
                        <p dir="ltr">{t('faq.content15')}</p>
                         <p dir="ltr">{t('faq.content22')}</p> 
                        <p dir="ltr">{t('faq.content16')}</p> 
                        <p dir="ltr">&nbsp;</p> 
                        <h3 dir="ltr">{t('faq.content17')}</h3> 
                        <p dir="ltr">{t('faq.content18')}</p> 
                        <p dir="ltr">&nbsp;</p> 
                        <h3 dir="ltr">{t('faq.content23')}</h3> 
                        <p dir="ltr">{t('faq.content19')}</p> 
                        <p dir="ltr">&nbsp;</p> 
                        


        </div>
      </div>
    </div>
  );
}

export default FAQ;
