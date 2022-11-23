import Products from "../Products/Products"
import product1 from "./img_products/product1.png"
import product2 from "./img_products/product2.png"
import product3 from "./img_products/product3.png"
import product4 from "./img_products/product4.png"
import product5 from "./img_products/product5.png"
import product6 from "./img_products/product6.png"

const TheProducts  = [
    {
        image: product1,
        type: "New",
        link: "/",
        name: "Fashion shorts",
        price: "50",
        price_old: "90",
    },
    {
        image: product2,
        type: "New",
        link: "/",
        name: "Green Dress with details",
        price: "50",
        price_old: "60",
    },
    {
        image: product3,
        type: "New",
        link: "/",
        name: "Yellow Dress with details",
        price: "40",
        price_old: "60",
    },
    {
        image: product4,
        type: "Hot",
        link: "/",
        name: "Green Long Sleeve Shirt",
        price: "50",
        price_old: "60",
    },
    {
        image: product5,
        type: "New",
        link: "/",
        name: "Green Long Sleeve Shirt",
        price: "50",
        price_old: "60",
    },
    {
        image: product6,
        type: "Hot",
        link: "/",
        name: "Vest with details",
        price: "50",
        price_old: "60",
    },
]

export default function LatestProducts() {
    return (
        <section class="latest-product-area padding-bottom">
        <div class="container">
  
          <div class="tab-content" id="nav-tabContent">
  
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                
                {TheProducts.map((product, index) => (
                    <Products
                        image={product.image}
                        type={product.type}
                        link={product.link}
                        name={product.name}
                        price={product.price}
                        price_old={product.price_old}
                        key={index}
                    />
                ))}

              </div>
            </div>
          </div>
  
        </div>
      </section>
    )
}