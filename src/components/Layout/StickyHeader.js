import { Link, useLocation } from "react-router-dom";

const RouteLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/products", name: "Products" },
  { href: "/technology", name: "Technology" },
  { href: "/careers", name: "Career" },
  { href: "/contact", name: "Contact" },
];

const StickyHeader = () => {
  const location = useLocation();

  return (
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="/">
                <img src="/assets/logo.png" alt="" style={{ height: "58px" }} />
              </a>
            </figure>
          </div>
          <div className="menu-area clearfix">
            <nav className="main-menu clearfix">
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
                    >
                      <Link to={routeLink.href}>{routeLink.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <div className="btn-box">
            <Link
              to="/contact#contact-form-section"
              className="theme-btn theme-btn-one"
            >
              <i className="icon-02"></i> Discuses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
