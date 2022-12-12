import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { PRODUCTS } from '../Products/ProductData';
import './SearchProduct.css';

function SearchProduct() {
    const [visible, setVisible] = useState(38);
    document.title = 'Search Product';
    const { searchValue } = useParams();
    return (
        <div className="search_container">
            <div className="search_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Keyword: {searchValue}</h3>
            </div>
            <div className="search_inner">
                {PRODUCTS.filter((item) => {
                    if (searchValue == '') {
                        return item;
                    } else if (item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())) {
                        return item;
                    }
                })
                    .slice(0, visible)
                    .map((item, index) => (
                        <ProductItem data={item} key={index} />
                    ))}
            </div>
        </div>
    );
}

export default SearchProduct;
