import { Link } from 'react-router-dom';

export default function Products(props) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6" key={props.index}>
            <div className="single-product mb-60">
                <div className="product-img">
                    <img src={props.image} alt="" />
                    <div className="new-product">
                        <span>{props.type}</span>
                    </div>
                </div>
                <div className="product-caption">
                    <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                    </div>
                    <h4>
                        <Link to={props.link}>{props.name}</Link>
                    </h4>
                    <div className="price">
                        <ul>
                            <li>{props.price}đ</li>
                            <li className="discount">{props.price_old}đ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
