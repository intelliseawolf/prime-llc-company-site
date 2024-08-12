import { Swiper, SwiperSlide } from "swiper/react";

const CustomerSection = () => {
  return (
    <div className="gdlr-core-pbf-wrapper customer-section">
      <div class="gdlr-core-pbf-background-wrap">
        <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"></div>
      </div>

      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          <div className="gdlr-core-pbf-wrapper-container-inner gdlr-core-item-mglr clearfix">
            <div
              class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
              id="gdlr-core-column-22"
            >
              <div
                class="gdlr-core-pbf-column-content-margin gdlr-core-js "
                style={{ paddingBottom: "65px" }}
              >
                <div class="gdlr-core-pbf-background-wrap"></div>
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align gdlr-core-style-vertical"
                      style={{ marginBottom: "45px" }}
                    >
                      <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                      style={{ paddingBottom: 0 }}
                    >
                      <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption">
                        <span class="gdlr-core-title-item-left-dot"></span>
                        Testimonial
                      </span>
                      <div class="gdlr-core-title-item-title-wrap ">
                        <h3 class="gdlr-core-title-item-title gdlr-core-skin-title">
                          What They Say About US
                          <span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <Swiper
                spaceBetween={50}
                className="gdlr-core-testimonial-style-left customer-section-slides"
                breakpoints={{
                  1024: { slidesPerView: 1 },
                  1200: { slidesPerView: 2 },
                }}
              >
                <SwiperSlide>
                  <div class="gdlr-core-testimonial clearfix gdlr-core-with-frame">
                    <div
                      class="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background  gdlr-core-outer-frame-element "
                      style={{
                        boxShadow: "0px 20px 40px rgba(0, 0, 0,0.07)",
                        background: "white",
                        padding: "30px",
                      }}
                    >
                      <div class="gdlr-core-testimonial-frame-border"></div>
                      <div class="gdlr-core-testimonial-content-wrap">
                        <div class="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content">
                          <p>
                            Prime Wave Technologies, Their expertise in software
                            development is unmatched, and they delivered a
                            product that exceeded our expectations.
                          </p>
                        </div>
                        <div class="gdlr-core-testimonial-author-wrap clearfix">
                          <div class="gdlr-core-testimonial-author-image gdlr-core-media-image">
                            <img
                              src="/assets/clients (1).jpg"
                              style={{
                                borderRadius: "100%",
                              }}
                              alt=""
                              width="70"
                              height="70"
                              title="portrait05"
                            />
                          </div>
                          <div class="gdlr-core-testimonial-author-content">
                            <div class="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">
                              Morne
                            </div>
                            <div class="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption">
                              Founder, Lakeside Brewing Co.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gdlr-core-testimonial clearfix gdlr-core-with-frame">
                    <div
                      class="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background  gdlr-core-outer-frame-element "
                      style={{
                        boxShadow: "0px 20px 40px rgba(0, 0, 0,0.07)",
                        background: "white",
                        padding: "30px",
                      }}
                    >
                      <div class="gdlr-core-testimonial-frame-border"></div>
                      <div class="gdlr-core-testimonial-content-wrap">
                        <div class="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content">
                          <p>
                            Working with Prime Wave Technologies has been a
                            game-changer for our business. Their software
                            solutions are top-notch and have significantly
                            improved our efficiency.
                          </p>
                        </div>
                        <div class="gdlr-core-testimonial-author-wrap clearfix">
                          <div class="gdlr-core-testimonial-author-image gdlr-core-media-image">
                            <img
                              src="/assets/clients (2).jpg"
                              style={{
                                borderRadius: "100%",
                              }}
                              alt=""
                              width="70"
                              height="70"
                              title="portrait05"
                            />
                          </div>
                          <div class="gdlr-core-testimonial-author-content">
                            <div class="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">
                              Michelle
                            </div>
                            <div class="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption">
                              CEO, Harmony Farmstead
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gdlr-core-testimonial clearfix gdlr-core-with-frame">
                    <div
                      class="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background  gdlr-core-outer-frame-element "
                      style={{
                        boxShadow: "0px 20px 40px rgba(0, 0, 0,0.07)",
                        background: "white",
                        padding: "30px",
                      }}
                    >
                      <div class="gdlr-core-testimonial-frame-border"></div>
                      <div class="gdlr-core-testimonial-content-wrap">
                        <div class="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content">
                          <p>
                            Prime Wave Technologies delivered beyond our
                            expectations. Their team's dedication and expertise
                            were evident in the outstanding software they
                            developed for us.
                          </p>
                        </div>
                        <div class="gdlr-core-testimonial-author-wrap clearfix">
                          <div class="gdlr-core-testimonial-author-image gdlr-core-media-image">
                            <img
                              src="/assets/clients (3).jpg"
                              style={{
                                borderRadius: "100%",
                              }}
                              alt=""
                              width="70"
                              height="70"
                              title="portrait05"
                            />
                          </div>
                          <div class="gdlr-core-testimonial-author-content">
                            <div class="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">
                              Patrick
                            </div>
                            <div class="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption">
                              CTO, Innospec Inc.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="gdlr-core-testimonial clearfix gdlr-core-with-frame">
                    <div
                      class="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background  gdlr-core-outer-frame-element "
                      style={{
                        boxShadow: "0px 20px 40px rgba(0, 0, 0,0.07)",
                        background: "white",
                        padding: "30px",
                      }}
                    >
                      <div class="gdlr-core-testimonial-frame-border"></div>
                      <div class="gdlr-core-testimonial-content-wrap">
                        <div class="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content">
                          <p>
                            The innovative solutions provided by Prime Wave
                            Technologies have helped us stay ahead in our
                            industry. Their support and service are
                            unparalleled.
                          </p>
                        </div>
                        <div class="gdlr-core-testimonial-author-wrap clearfix">
                          <div class="gdlr-core-testimonial-author-image gdlr-core-media-image">
                            <img
                              src="/assets/clients (4).jpg"
                              style={{
                                borderRadius: "100%",
                              }}
                              alt=""
                              width="70"
                              height="70"
                              title="portrait05"
                            />
                          </div>
                          <div class="gdlr-core-testimonial-author-content">
                            <div class="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">
                              Lina
                            </div>
                            <div class="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption">
                              COO, Bright Horizon Solar
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
