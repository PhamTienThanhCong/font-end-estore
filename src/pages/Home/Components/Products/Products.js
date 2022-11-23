import { Link } from "react-router-dom";
 
export default function Products(props) {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6" key={props.key}>
            <div class="single-product mb-60">
                <div class="product-img">
                    <img src={props.image} alt=""/>
                        <div class="new-product">
                            <span>{props.type}</span>
                        </div>
                </div>
                <div class="product-caption">
                    <div class="product-ratting">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star low-star"></i>
                        <i class="far fa-star low-star"></i>
                    </div>
                    <h4>
                        <Link to={props.link}>{props.name}</Link>
                    </h4>
                    <div class="price">
                        <ul>
                            <li>${props.price}</li>
                            <li class="discount">${props.price_old}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}