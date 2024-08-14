import { Link } from "react-router-dom";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  const RouteLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/products", name: "Products" },
    { href: "/careers", name: "Career" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <footer>
      <div class="corzo-footer-wrapper">
        <div class="corzo-footer-container corzo-container clearfix">
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-20">
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
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-20">
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
                  {RouteLinks.map((route) => (
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page corzo-normal-menu"
                      key={route.name}
                    >
                      <Link
                        to={route.href}
                        className="sf-with-ul-pre sf-with-ul"
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="corzo-footer-column corzo-item-pdlr corzo-column-20">
            <div id="text-3" class="widget widget_text corzo-widget">
              <h1 class="corzo-widget-title corzo-with-divider">
                Contact Information
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
                    Office
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#ffffff",
                      fontWeight: 600,
                    }}
                  >
                    375 Baskins Rd, Rock Hill, SC
                  </span>
                  <span
                    class="gdlr-core-space-shortcode"
                    style={{ marginTop: "-20px" }}
                  ></span>
                  <br />
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
                    shavar@pwavetechnologies.com
                  </span>
                  <br />
                  <span
                    class="gdlr-core-space-shortcode"
                    style={{ marginTop: "10px" }}
                  ></span>
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
                    (650) 521-9948
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
            ©{currentYear} Prime Wave Technologies LLC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
