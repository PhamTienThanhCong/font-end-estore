import React from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";

function Coat() {
    const {t} = useTranslation()
    return (
        <div className="size-item ">
            <div className="size-table">
                <table className="size-tablechart one-whole">
                    <thead>
                        <tr>
                            <td>
                                <span>{t('size.content2')}/<br/>{t('size.content3')}(cm)</span>
                            </td>
                            <td>
                                <span>XS</span>
                                <span className="table-title">
                                    1m45 - 1m54<br/>
                                    40 - 47kg
                                </span>
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
                                    1m84 - 1m90<br/>
                                    83kg - 90kg
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="table-textbold">{t('size.content4')}</span></td>
                            <td>64.5</td>
                            <td>66.5</td>
                            <td>68.5</td>
                            <td>70.5</td>
                            <td>72.5</td>
                            <td>75.5</td>
                            <td>77.5</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content5')}</span></td>
                            <td>50</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                            <td>58</td>
                            <td>60</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content6')}</span></td>
                            <td>68.5</td>
                            <td>70.5</td>
                            <td>72.5</td>
                            <td>74.5</td>
                            <td>76.5</td>
                            <td>78.5</td>
                            <td>80.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="size-image">
                <div className="size-imageitle">
                    {t('header.coat')}
                </div>
                <img src="https://mcdn.coolmate.me/uploads/December2021/ULTRA_LIGHT2x_(1).png"/>
            </div>
        </div>
    )
}
export default Coat;
