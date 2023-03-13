import ButtonMore from '../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Fillter from '../../Components/Fillter/Fillter';
import './Shirt.css';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MenShirt() {
    const { productType } = useParams();
    const [PRODUCTS, setPRODUCTS] = useState([]);
    const [nameApp, setNameApp] = useState('');
    const [visible, setVisible] = useState(6);
    const [loadMore, setLoadMore] = useState(true);
    useEffect(() => {
            // 👇️ scroll to top on page load
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }, []);

    const [priceFilter, setPriceFilter] = useState(0);
    const [vodeFilter, setVoteFilter] = useState(0);

    const handleChoicePrice = (price) => {
        setPriceFilter(price);
    };

    const handleChoiceVote = (vote) => {
        setVoteFilter(vote);
    };

    const handleClear = (e) => {
        e.preventDefault();
        setPriceFilter(0);
        setVoteFilter(0);
        document.getElementById('form-reset').reset();
    }

    const setVisibleProduct = () => {
        console.log(visible);
        setVisible(visible + 6);
        if (visible + 6 >= PRODUCTS.length) {
            setLoadMore(false);
        }
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setNameApp(productType); 
        document.title = `Product | ${productType}`;
        setLoading(true);
        axios.get('http://localhost:8000/v1/product?Category=' + productType)
            .then(res => {
                setPRODUCTS(res.data);
                if (res.data.length <= 6) {
                    setLoadMore(false);
                }else{
                    setLoadMore(true);
                }
                setLoading(false);
                setVisible(6);
            })
            .catch(err => console.log(err));
    }, [productType]);

    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>{ nameApp }</h3>
            </div>
            <div className="shoes_content">
                <Fillter handleChoicePrice={handleChoicePrice} handleChoiceVote={handleChoiceVote} handleClear={handleClear} />
                
                <div className="shirt_inner">
                    { loading ? <div className="loading">Loading...</div> :
                    PRODUCTS.filter((item) => {
                                    if (priceFilter === 0) {
                                        return item;
                                    } else {
                                        if (priceFilter === 100000) {
                                            if (item.price <= priceFilter) {
                                                return item;
                                            }
                                        }else if (priceFilter === 250000) {
                                            if (item.price <= priceFilter && item.price >= 100000) {
                                                return item;
                                            }
                                        } else if (priceFilter === 500000) {
                                            if (item.price <= priceFilter && item.price >= 250000) {
                                                return item;
                                            }
                                        } else if (priceFilter === 100000000) {
                                            if (item.price >= 500000) {
                                                return item;
                                            }
                                        }
                                    }
                                })
                                .filter((item) => {
                                    if (vodeFilter === 0) {
                                        return item;
                                    } else if (Math.round(item.ratting) === vodeFilter) {
                                        return item;
                                    }
                                }).slice(0, visible).map((item, index) => {
                            return <ProductItem data={item} key={index} />;
                        })
                    }
                    </div>
                </div>
            <div className="button-show-more">
                {
                    loadMore ? <ButtonMore onClick={ setVisibleProduct } /> : ''
                }
            </div>
        </div>
    );
}

export default MenShirt;
