import React from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";

function Shoe() {
    const {t} = useTranslation()

    return (
        <div className="size-chart__table">
            <div className="size-item ">
                <div className="size-chart__table">
                    <div className="size-item ">
                        <div className="size-image">
                            <div className="size-imageitle">
                                {t('header.shoe')}
                            </div>
                            <img src="https://mcdn.coolmate.me/uploads/November2020/31.jpg" alt="ÁO DÀI TAY"/>
                        </div>
                    </div>
                </div>
                <div className="size-table">
                    <table className="size-tablechart one-whole">
                        <thead>
                            <tr>
                                <td>
                                    <span>Inch to Cm/<br/>{t('size.content9')}</span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        9.25<br/>
                                        23.5
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        9.5<br/>
                                        24.1
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        9.625<br/>
                                        24.4
                                    </span>
                                </td>

                                <td>
                                    <span className="table-title">
                                        9.75<br/>
                                        24.8
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        9.9375<br/>
                                        25.4
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.125<br/>
                                        25.7
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.25<br/>
                                        26
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.4375<br/>
                                        26.7
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.5625<br/>
                                        27
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.75<br/>
                                        27.3
                                    </span>
                                </td>
                                <td>
                                    <span className="table-title">
                                        10.9375<br/>
                                        27.9
                                    </span>
                                </td>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <span className="table-textbold">EU {t('size.content10')}</span>
                                </td>
                                <td>36.5</td>
                                <td>37.5</td>
                                <td>38</td>
                                <td>38.5</td>
                                <td>39</td>
                                <td>40</td>
                                <td>40.5</td>
                                <td>41</td>
                                <td>42</td>
                                <td>42.5</td>
                                <td>43</td>

                            </tr>
                            <tr>
                                <td>
                                <span className="table-textbold">US {t('size.content10')}</span>
                                </td>
                                <td>6</td>
                                <td>6.5</td>
                                <td>7</td>
                                <td>7.5</td>
                                <td>8</td>
                                <td>8.5</td>
                                <td>9</td>
                                <td>9.5</td>
                                <td>10</td>
                                <td>10.5</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>
                                <span className="table-textbold">UK {t('size.content10')}</span>
                                </td>
                                <td>5.5</td>
                                <td>6</td>
                                <td>6.5</td>
                                <td>7</td>
                                <td>7.5</td>
                                <td>8</td>
                                <td>8.5</td>
                                <td>9</td>
                                <td>9.5</td>
                                <td>10</td>
                                <td>10.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Shoe;