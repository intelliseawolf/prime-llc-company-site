import { Link, useLocation } from "react-router-dom";

const RouteLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/products", name: "Products" },
  { href: "/technology", name: "Technology" },
  { href: "/careers", name: "Career" },
  { href: "/contact", name: "Contact" },
];

const MobileMenu = ({ setShowMobileMenu }) => {
  const location = useLocation();

  return (
    <div className="mobile-menu">
      <div className="menu-backdrop"></div>
      <div
        className="close-btn"
        onClick={() => {
          setShowMobileMenu(false);
        }}
      >
        <i className="icon-fa-times"></i>
      </div>

      <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
        <div
          id="mCSB_1"
          className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
          style={{ maxHeight: "822px" }}
          tabIndex="0"
        >
          <div
            id="mCSB_1_container"
            className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
            style={{ position: "relative", top: "0", left: "0" }}
            dir="ltr"
          >
            <div className="nav-logo">
              <a href="/">
                <img
                  src="assets/logo.png"
                  alt="logo"
                  className="mCS_img_loaded"
                  style={{ height: "36px" }}
                />
              </a>
            </div>
            <div className="menu-outer">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix home-menu">
                  {RouteLinks.map((routeLink) => (
                    <li
                      key={routeLink.href}
                      className={
                        routeLink.href === location.pathname ? "current" : ""
                      }
                      onClick={() => {
                        setShowMobileMenu(false);
                      }}
                    >
                      <Link to={routeLink.href}>{routeLink.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>111 NE 1st, Miami, Florida</li>
                <li>
                  <a href="tel:+17185099729">+1 (718) 509 9729</a>
                </li>
                <li>
                  <a href="mailto:shane@apexic.co">shane@apexic.co</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="mCSB_1_scrollbar_vertical"
            className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
            style={{ display: "none" }}
          >
            <div className="mCSB_draggerContainer">
              <div
                id="mCSB_1_dragger_vertical"
                className="mCSB_dragger"
                style={{
                  position: "absolute",
                  minHeight: "0px",
                  height: "0px",
                  top: "0px",
                }}
                // onContextMenu="return false;"
              >
                <div
                  className="mCSB_dragger_bar"
                  style={{ lineHeight: "0px" }}
                ></div>
              </div>
              <div className="mCSB_draggerRail"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
