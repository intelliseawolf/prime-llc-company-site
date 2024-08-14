import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import HamburgerIcon from "../Icon/hamburger";
import CrossIcon from "../Icon/cross";

const RouteLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/products", name: "Products" },
  { href: "/careers", name: "Career" },
  { href: "/contact", name: "Contact" },
];

const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <div className="corzo-mobile-header-wrap">
      <div
        className="corzo-mobile-header corzo-header-background corzo-style-slide corzo-sticky-mobile-navigation "
        id="corzo-mobile-header"
      >
        <div className="corzo-mobile-header-container corzo-container clearfix">
          <div className="corzo-logo corzo-item-pdlr">
            <div className="corzo-logo-inner">
              <a className="corzo-orig-logo" href="/">
                <img src="assets/logo.png" alt="" width="60" />
              </a>
            </div>
          </div>
          <div className="corzo-mobile-menu-right">
            <div
              className="corzo-overlay-menu corzo-mobile-menu"
              onClick={() => setShow(!show)}
            >
              {show ? <CrossIcon /> : <HamburgerIcon />}
            </div>
          </div>
        </div>

        <div
          className="corzo-mobile-header-container corzo-container clearfix"
          style={{ animationDuration: "1s" }}
        >
          {RouteLinks.map((route) => (
            <div
              className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12780 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-13227 corzo-normal-menu text-center ${
                show ? "menu-item-show" : "menu-item-hide"
              }`}
              key={route.name}
            >
              <Link to={route.href} className="sf-with-ul-pre sf-with-ul">
                {route.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
