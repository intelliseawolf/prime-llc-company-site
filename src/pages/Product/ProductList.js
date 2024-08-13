import { Swiper, SwiperSlide } from "swiper/react";

const products = [
  {
    title: "Ecommerce Industry",
    text: "Lakeside",
    image: "assets/product-1.jpg",
  },
  {
    title: "Agriculture Industry",
    text: "Harmony Farmstead",
    image: "assets/product-2.jpg",
  },
  {
    title: "Chemical industry",
    text: "Innospec",
    image: "assets/product-3.jpg",
  },
  {
    title: "Solar Industry",
    text: "Bright Horizon Solar",
    image: "assets/product-4.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <ul>
        <Swiper
          spaceBetween={50}
          className="gdlr-core-testimonial-style-left"
          slidesPerView={1}
        >
          {products.map((product) => (
            <SwiperSlide>
              <li class="gdlr-core-item-mglr">
                <div
                  class="gdlr-core-item-list gdlr-core-portfolio-medium-feature "
                  style={{
                    marginBottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div class="gdlr-core-item-list-inner">
                    <div class="gdlr-core-portfolio-content-wrap gdlr-core-skin-e-background">
                      <h3 class="gdlr-core-portfolio-title gdlr-core-skin-title">
                        {product.title}
                      </h3>
                      <span class="gdlr-core-portfolio-info gdlr-core-portfolio-info-tag gdlr-core-info-font gdlr-core-skin-caption">
                        {product.text}
                      </span>
                      <div class="gdlr-core-portfolio-content"></div>
                    </div>
                    <div
                      class="gdlr-core-portfolio-thumbnail-wrap gdlr-core-js"
                      data-sync-height="portfolio-medium-feature-4"
                    >
                      <div class="gdlr-core-portfolio-thumbnail gdlr-core-media-image gdlr-core-style-none">
                        <div class="gdlr-core-portfolio-thumbnail-image-wrap gdlr-core-grayscale-effect">
                          <img
                            src={product.image}
                            alt="product detail"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default ProductList;
