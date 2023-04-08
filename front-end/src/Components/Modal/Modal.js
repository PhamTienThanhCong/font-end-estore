import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { payment } from '../../redux/cartSlice';
import './Modal.css';
import { useTranslation } from "react-i18next";

function Modal({ onOpen }) {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePay = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(payment());
            navigate('/payment');
        }, 500);
    };

    return (
        <div className="dark-bg" onClick={() => onOpen(false)}>
            <div
                className="modal_container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal_header">
                    <div className="modal_title">{t('modal.address')}</div>
                </div>
                <form className="modal_content" onSubmit={handlePay}>
                    <input placeholder={t("modal.fullname")} className="content_2" required/>
                    <div className="choose">
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">{t('modal.city')}</option>
                                <option value="1">Hanoi</option>
                                <option value="2">Ho Chi Minh</option>
                                <option value="3">Danang</option>
                            </select>
                        </div>
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">{t('modal.district')}</option>
                                <option value="1">Thanh Xuan</option>
                                <option value="2">Thanh Ha</option>
                                <option value="3">Ha Long</option>
                            </select>
                        </div>
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">{t('modal.ward')}</option>

                                <option value="1">Ha Dinh</option>
                                <option value="2">Viet Tri</option>
                                <option value="3">Hai Tien</option>
                            </select>
                        </div>
                    </div>
                    <input placeholder={t("modal.note")} className="content_2" required/>
                    <button className="btn_1 checkout_btn_1 pay">
                        {t('modal.checkout')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;

