import React from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";

function Polo() {
    const {t} = useTranslation()

    return (
        <div className="size-item ">
            <div className="size-image">
                <div className="size-imageitle">
                {t('header.poloshirt')}        
                </div>
                <img src="https://mcdn.coolmate.me/uploads/December2021/POLO2x.png" alt="Áo Polo"/>
            </div>
            <div className="size-table">
                <table className="size-tablechart one-whole">
                    <thead>
                        <tr>
                            <td>
                                <span>{t('size.content2')}/<br/>{t('size.content3')}(cm)</span>
                            </td>                            
                            <td>
                                <span>S</span>
                                <span className="table-title">
                                    1m55 - 1m59<br/>
                                    48kg - 54kg
                                </span>
                            </td>
                            <td>
                                <span>M</span>
                                <span className="table-title">
                                    1m60 - 1m65<br/>
                                    55kg - 61kg
                                </span>
                            </td>
                            <td>
                                <span>L</span>
                                <span className="table-title">
                                    1m66 - 1m72<br/>
                                    62kg - 68kg
                                </span>
                            </td>
                            <td>
                                <span>XL</span>
                                <span className="table-title">
                                    1m72 - 1m77<br/>
                                    69kg - 75kg
                                </span>
                            </td>
                            <td>
                                <span>2XL</span>
                                <span className="table-title">
                                    1m77 - 1m83<br/>
                                    76kg - 82kg
                                </span>
                            </td>
                            <td>
                                <span>3XL</span>
                                <span className="table-title">
                                    1m84-1m92<br/>
                                    83kg - 90kg
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="table-textbold">{t('size.content7')}</span></td>
                            <td>65</td>
                            <td>67</td>
                            <td>69</td>
                            <td>71</td>
                            <td>73</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content5')}	</span></td>
                            <td>47</td>
                            <td>49</td>
                            <td>51</td>
                            <td>53</td>
                            <td>55</td>
                            <td>57</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content6')}</span></td>
                            <td>21.5</td>
                            <td>22.5</td>
                            <td>23</td>
                            <td>23.5</td>
                            <td>24.5</td>
                            <td>25.5</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content8')}</span></td>
                            <td>42.5</td>
                            <td>43.5</td>
                            <td>44.5</td>
                            <td>45.5</td>
                            <td>46.5</td>
                            <td>47.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Polo;
