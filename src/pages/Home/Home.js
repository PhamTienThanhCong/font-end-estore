import Slide from "./Components/Slide/Slide";
import ShopCategory from "./Components/ShopCategory/ShopCategory";

export default function Home() {
  return (
    <main>

      <Slide />


      <ShopCategory />


      {/* <section className="latest-product-area padding-bottom">
        <div className="container">
          <div className="row product-btn d-flex justify-content-end align-items-end">

            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="section-tittle mb-30">
                <h2>Latest Products</h2>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7">
              <div className="properties__button f-right">

                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                      aria-controls="nav-home" aria-selected="true">All</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                      aria-controls="nav-profile" aria-selected="false">New</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                      aria-controls="nav-contact" aria-selected="false">Featured</a>
                    <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab"
                      aria-controls="nav-contact" aria-selected="false">Offer</a>
                  </div>
                </nav>

              </div>
            </div>
          </div>

          <div className="tab-content" id="nav-tabContent">

            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product1.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product2.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product3.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product4.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product5.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product6.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product4.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product5.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product6.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product2.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product3.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product1.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product2.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product3.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product1.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product4.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product6.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product5.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product1.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product2.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product3.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product4.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product5.png" alt="" />
                    </div>
                    <div className="product-caption">
                      <div className="product-ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star low-star"></i>
                        <i className="far fa-star low-star"></i>
                      </div>
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-product mb-60">
                    <div className="product-img">
                      <img src="assets/img/categori/product6.png" alt="" />
                      <div className="new-product">
                        <span>New</span>
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
                      <h4><a href="#">Green Dress with details</a></h4>
                      <div className="price">
                        <ul>
                          <li>$40.00</li>
                          <li className="discount">$60.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}


    </main>
  );
}