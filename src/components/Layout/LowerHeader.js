import { Link } from "react-router-dom";
import LinkedinIcon from "../Icon/linkedin";
import MediumIcon from "../Icon/medium";
import TwitterIcon from "../Icon/Twitter";
import FacebookIcon from "../Icon/facebook";
import useMouseScroll from "../../hooks/useMouseScroll";

const RouteLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/products", name: "Products" },
  { href: "/technology", name: "Technology" },
  { href: "/careers", name: "Career" },
  { href: "/contact", name: "Contact" },
];

const LowerHeader = () => {
  const scrollPosition = useMouseScroll();
  const cls = scrollPosition > 100 ? "fixed-header" : "";

  return (
    <div
      className={
        "corzo-navigation-bar-wrap corzo-style-solid corzo-sticky-navigation corzo-sticky-navigation-height corzo-style-left " +
        cls
      }
    >
      <div className="corzo-navigation-background"></div>
      <div className="corzo-navigation-container clearfix  corzo-container">
        <div className="corzo-navigation corzo-item-pdlr clearfix ">
          <div
            className="corzo-main-menu sf-js-enabled sf-arrows"
            id="corzo-main-menu"
          >
            <ul id="menu-main-navigation-1" className="sf-menu">
              {RouteLinks.map((route) => (
                <li
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12780 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-13227 corzo-normal-menu"
                  key={route.name}
                >
                  <Link to={route.href} className="sf-with-ul-pre sf-with-ul">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="corzo-main-menu-right-wrap clearfix ">
            <div className="corzo-top-bar-right-social">
              <a
                href="/"
                target="_blank"
                className="corzo-top-bar-social-icon"
                title="facebook"
              >
                <FacebookIcon width={25} height={25} />
              </a>
              <a
                href="/"
                target="_blank"
                className="corzo-top-bar-social-icon"
                title="linkedin"
              >
                <TwitterIcon width={25} height={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/prime-shavar-horton"
                target="_blank"
                rel="noreferrer"
                className="corzo-top-bar-social-icon"
                title="pinterest"
              >
                <LinkedinIcon width={25} height={25} />
              </a>
              <a
                href="https://medium.com/@pwavetechnologiesllc"
                target="_blank"
                rel="noreferrer"
                className="corzo-top-bar-social-icon"
                title="twitter"
              >
                <MediumIcon width={25} height={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
