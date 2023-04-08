import React from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";

function Shirt() {
    const {t} = useTranslation()

    return (
        <div className="size-item ">
            <div className="size-table">
                <table className="size-tablechart one-whole">
                    <thead>
                        <tr>
                            <td><span>SYMBOL/<br/>PARAMETER(cm)</span></td>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="table-textbold">{t('size.content7')}</span></td>
                            <td>73</td>
                            <td>74</td>
                            <td>75</td>
                            <td>76</td>
                            <td>77</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content5')}</span></td>
                            <td>49</td>
                            <td>51</td>
                            <td>53</td>
                            <td>55</td>
                            <td>57</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content6')}</span></td>
                            <td>58</td>
                            <td>59</td>
                            <td>60</td>
                            <td>61</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td><span className="table-textbold">{t('size.content8')}</span></td>
                            <td>44</td>
                            <td>45</td>
                            <td>46</td>
                            <td>47</td>
                            <td>48</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="size-image">
                <div className="size-imageitle">
                {t('header.shirt')}
                </div>
                <img src="https://mcdn.coolmate.me/uploads/December2021/SO_MI_DAI2x.png"/>
            </div>
        </div>
)
}
export default Shirt;