import React from 'react';
import './Ship.css';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";


function Ship(){
    const { t } = useTranslation()
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);   
    return(
        <div className="ship-page">
            <div className="container">
                <div className="ship-content">
                    <h1 class="ship-title">
                        {t('footer.ship')}
                    </h1>
                    <p><img src="https://mcdn.coolmate.me/uploads/January2022/Dich_vu_giao_hang_1.jpg" width="1000" /></p> 
                    <p>{t('ship.content1')} <a href="http://localhost:3000/">SGB </a>{t('ship.content2')}</p>                    
                    <p> {t('ship.content3')}&nbsp;</p> 
                    
                    <p>{t('ship.content4')}</p> 
                    <p><img src="https://mcdn.coolmate.me/image/October2022/Dich_vu_giao_hang_update.jpg" width="1000" /><br/></p> 
                    <ul>
                        <li>{t('ship.content5')}</li>
                        <li>{t('ship.content6')}</li>
                    </ul> 
                    <p>{t('ship.content7')}</p>
                    <p>{t('ship.content8')}</p>
                    <p><img src="https://mcdn.coolmate.me/uploads/January2022/Dich_vu_giao_hang_3.jpg"width="700" /></p> 
                    <ul>
                        <li>{t('ship.content9')}</li>                   
                    </ul> 
                    <p></p>
                    <div className="info-box">
                        {t('ship.content10')}
                    </div>
                    <p></p>
                    <p>{t('ship.content11')} <a href="https://coolmate.me/">SGB</a> {t('ship.content12')}</p>
                    <p>&nbsp;</p> 
                    <p>&nbsp;</p> 
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    )
};

export default Ship;