import React from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";

function Tshirt() {
    const {t} = useTranslation()

    return (
        <div className="size-item ">
            <div className="size-table">
                <table className="size-tablechart">
                    <thead>
                        <tr>
                            <td>
                                <span>SYMBOL/<br/>PARAMETER(cm)</span>
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
                                    1m77 - 1m84<br/>
                                    76kg - 84kg
                                </span>
                            </td>
                            <td>
                                <span>3XL</span>
                                <span className="table-title">
                                    1m85 - 1m92<br/>
                                    85kg - 90kg
                                </span>
                            </td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <span className="table-textbold">{t('size.content7')}</span>
                            </td>
                            <td>65</td>
                            <td>67</td>
                            <td>69</td>
                            <td>71</td>
                            <td>73</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td>
                            <span className="table-textbold">{t('size.content5')}</span>
                            </td>
                            <td>48</td>
                            <td>50</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>
                            <span className="table-textbold">{t('size.content6')}</span>
                            </td>
                            <td>59</td>
                            <td>60</td>
                            <td>61</td>
                            <td>62</td>
                            <td>63</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>
                            <span className="table-textbold">{t('size.content8')}</span>
                            </td>
                            <td>41.5</td>
                            <td>43</td>
                            <td>44.5</td>
                            <td>46</td>
                            <td>47.5</td>
                            <td>49</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

            <div className="size-item ">
                <div className="size-image">
                    <div className="size-imageitle">
                        {t('header.tshirt')}
                    </div>
                    <img src="https://mcdn.coolmate.me/uploads/November2020/31.jpg"/>
                </div>
            </div>

        </div>
    )
}
export default Tshirt;