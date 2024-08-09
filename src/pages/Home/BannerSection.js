const BannerSection = () => {
  return (
    <div
      className="gdlr-core-pbf-wrapper "
      style={{ padding: "0px 0px 0px 0px", height: "600px" }}
    >
      <div
        className="gdlr-core-pbf-background-wrap"
        style={{ backgroundColor: "#161616" }}
      ></div>
      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          <div className="gdlr-core-pbf-element">
            <div
              className="gdlr-core-revolution-slider-item gdlr-core-item-pdlr gdlr-core-item-pdb "
              style={{ paddingBottom: "0px" }}
            >
              <div style={{ marginTop: "0px", marginBottom: "0px" }}>
                <div
                  id="rev_slider_3_1_wrapper"
                  style={{
                    visibility: "visible",
                    background: "transparent",
                    padding: "0px",
                    margin: "0px auto",
                    height: "600px",
                    display: "block",
                    width: "100%",
                    position: "absolute",
                    overflow: "visible",
                    left: 0,
                  }}
                >
                  <div
                    style={{
                      height: "600px",
                      width: "100%",
                      maxHeight: "600px",
                    }}
                    className="revslider-initialised rev_redraw_on_blurfocus"
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        visibility: "visible",
                        maxHeight: "none",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          display: "block",
                          overflow: "hidden",
                          height: "100%",
                          width: "100%",
                          zIndex: "20",
                          opacity: 1,
                        }}
                      >
                        <rs-sbg-px>
                          <img src="assets/banner-02.png" alt="banner bg" />
                        </rs-sbg-px>
                        <div
                          className="rs-parallax-wrap corzo-container"
                          style={{
                            marginTop: "200px",
                            zIndex: 12,
                            perspective: "601px",
                          }}
                        >
                          <div
                            style={{
                              zIndex: 12,
                              color: "rgb(255, 255, 255)",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              textAlign: "left",
                              letterSpacing: "0px",
                              fontWeight: 700,
                              fontSize: "50px",
                              paddingLeft: "20px",
                              filter: "none",
                              transformOrigin: "50% 50%",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                            className="rs-layer"
                          >
                            Prime Wave Technologies LLC
                          </div>
                        </div>
                        <div
                          className="rs-parallax-wrap corzo-container"
                          style={{
                            marginTop: "40px",
                            zIndex: 12,
                            perspective: "601px",
                          }}
                        >
                          <div
                            style={{
                              zIndex: 11,
                              color: "rgb(255, 255, 255)",
                              textDecoration: "none",
                              width: "537px",
                              textAlign: "left",
                              lineHeight: "35px",
                              letterSpacing: "0px",
                              fontWeight: 400,
                              fontSize: "21px",
                              paddingLeft: "20px",
                              filter: "none",
                              transformOrigin: "50% 50%",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                            className="rs-layer"
                          >
                            Enhance your business with our expert software
                            development services. Ensure robust and innovative
                            solutions to drive your organization forward.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
