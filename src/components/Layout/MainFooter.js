const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div class="corzo-footer-wrapper">
        <div class="corzo-footer-container corzo-container clearfix">
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-15">
            <div id="text-7" class="widget widget_text corzo-widget">
              <div class="textwidget">
                <p>
                  <img
                    src="/assets/logo.png"
                    alt=""
                    width="123"
                    height="31"
                    title="logox1"
                    style={{
                      filter: "contrast(0%)",
                    }}
                  />
                </p>
                <p>
                  Prime Wave Technologies LLC is dedicated to delivering
                  top-notch software development services. Our expertise spans
                  across multiple industries, providing innovative solutions
                  that drive business success.
                </p>
              </div>
            </div>
          </div>
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-15">
            <div
              id="gdlr-core-custom-menu-widget-1"
              class="widget widget_gdlr-core-custom-menu-widget corzo-widget"
            >
              <h1 class="corzo-widget-title corzo-with-divider">About Us</h1>
              <span class="clear"></span>
              <div class="menu-quick-links-container">
                <ul
                  id="menu-quick-links"
                  class="gdlr-core-custom-menu-widget gdlr-core-menu-style-half"
                >
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12834 corzo-normal-menu">
                    <a href="https://demo.goodlayers.com/corzo/cybersecurity/security-it-operations/">
                      Services
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13344 corzo-normal-menu">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13027 corzo-normal-menu">
                    <a href="https://demo.goodlayers.com/corzo/cybersecurity/about/">
                      About Us
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12479 corzo-normal-menu">
                    <a href="/">FAQ</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12832 corzo-normal-menu">
                    <a href="https://demo.goodlayers.com/corzo/cybersecurity/blog-3-columns-with-frame/">
                      Blog
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12593 corzo-normal-menu">
                    <a href="https://demo.goodlayers.com/corzo/cybersecurity/contact/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-15">
            <div id="text-3" class="widget widget_text corzo-widget">
              <h1 class="corzo-widget-title corzo-with-divider">
                375 Baskins Rd, Rock Hill, SC
              </h1>
              <span class="clear"></span>
              <div class="textwidget">
                <p>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#999999",
                      fontWeight: 400,
                    }}
                  >
                    Email
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#ffffff",
                      fontWeight: 600,
                    }}
                  >
                    Contact@conferatheme.us
                  </span>
                  <br />
                  <span
                    class="gdlr-core-space-shortcode"
                    style={{ marginTop: "-10px" }}
                  ></span>
                  <br />
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#999999",
                      fontWeight: 400,
                    }}
                  >
                    Phone
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#ffffff",
                      fontWeight: 600,
                    }}
                  >
                    6505219948
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="corzo-copyright-wrapper">
        <div class="corzo-copyright-container corzo-container">
          <div class="corzo-copyright-text corzo-item-pdlr">
            <span class="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-none-align gdlr-direction-horizontal"></span>
            <span
              class="gdlr-core-space-shortcode"
              style={{ marginTop: "20px" }}
            ></span>
            ©{currentYear} Prime Wave Technologies LLC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
