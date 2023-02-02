import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { PRODUCTS } from '../Products/ProductData';
import './SearchProduct.css';

function SearchProduct() {
    const [visible, setVisible] = useState(38);
    document.title = 'Search Product';
    const { searchValue } = useParams();
    
    const [priceFilter, setPriceFilter] = useState(0);
    const [vodeFilter, setVoteFilter] = useState(0);

    const handleChoicePrice = (price) => {
        setPriceFilter(price);
        console.log(priceFilter);
    };

    const handleChoiceVote = (vote) => {
        setVoteFilter(vote);
        console.log(vodeFilter);
    };

    const handleClear = (e) => {
        e.preventDefault();
        setPriceFilter(0);
        setVoteFilter(0);
        document.getElementById('form-reset').reset();
    }

    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Keyword: {searchValue}</h3>
            </div>
            <div className="shoes_content">
                <form className="shoes_fillter" id='form-reset'>
                    <ul>
                        <li>
                            <h4>
                                <i className="fas fa-filter"></i> Giá sản phẩm
                            </h4>
                        </li>
                        <li>
                            <input id="price-1" type="radio" name='price' onClick={
                                () => handleChoicePrice(100000)
                            } />
                            <label htmlFor="price-1" >0 - 100.000 VNĐ</label>
                        </li>
                        <li>
                            <input id="price-2" type="radio" name='price' onClick={
                                () => handleChoicePrice(250000)
                            } />
                            <label htmlFor="price-2" >100.000 - 250.000 VNĐ</label>
                        </li>
                        <li>
                            <input id="price-3" type="radio" name='price' onClick={
                                () => handleChoicePrice(500000)
                            } />
                            <label htmlFor="price-3" >250.000 - 500.000 VNĐ</label>
                        </li>
                        <li>
                            <input id='price-4' type="radio" name='price' onClick={
                                () => handleChoicePrice(100000000)
                            } />
                            <label htmlFor="price-4" >Trên 500.000 VNĐ</label>
                        </li>
                        
                        <li>
                            <h4>
                                <i className="fas fa-filter"></i> Đánh Giá Sản Phẩm
                            </h4>
                        </li>
                        <li>
                            <input id="vote-1" type="radio" name='vote' onClick={
                                () => handleChoiceVote(1)
                            } />
                            <label htmlFor="vote-1" >⭐</label>
                        </li>
                        <li>
                            <input id="vote-2" type="radio" name='vote' onClick={
                                () => handleChoiceVote(2)
                            } />
                            <label htmlFor="vote-2" >⭐⭐</label>
                        </li>
                        <li>
                            <input id="vote-3" type="radio" name='vote' onClick={
                                () => handleChoiceVote(3)
                            } />
                            <label htmlFor="vote-3" >⭐⭐⭐</label>
                        </li>
                        <li>
                            <input id='vote-4' type="radio" name='vote' onClick={
                                () => handleChoiceVote(4)
                            } />
                            <label htmlFor="vote-4" >⭐⭐⭐⭐</label>
                        </li>
                        <li>
                            <input id='vote-5' type="radio" name='vote' onClick={
                                () => handleChoiceVote(5)
                            } />
                            <label htmlFor="vote-5" >⭐⭐⭐⭐⭐</label>
                        </li>
                        <li>
                            {/* button clear */}
                            <button onClick={handleClear} className="btn btn-primary btn-clear">Clear</button>
                        </li>
                    </ul>
                </form>
                <div className="shoes_inner">
                    {PRODUCTS.filter((item) => {
                        if (searchValue === '') {
                            return item;
                        } else if (item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())) {
                            return item;
                        }
                    })
                        .filter((item) => {
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
                        })
                        .slice(0, visible)
                        .map((item, index) => (
                            <ProductItem data={item} key={index} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default SearchProduct;
