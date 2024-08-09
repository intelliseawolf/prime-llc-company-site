import ContactIcon from "../Icon/contact";

const TopHeader = () => {
  return (
    <header class="corzo-header-wrap corzo-header-style-bar corzo-header-background  corzo-style-left">
      <div class="corzo-header-container clearfix corzo-container">
        <div class="corzo-header-container-inner d-flex align-items-center justify-content-between">
          <div class="corzo-logo  corzo-item-pdlr">
            <div class="corzo-logo-inner">
              <a href="/" class="corzo-fixed-nav-logo">
                <img src="assets/logo.png" alt="" width="60" />
              </a>
              <a href="/" class="corzo-orig-logo">
                <img src="assets/logo.png" alt="" width="82" />
              </a>
            </div>
          </div>
          <div class="corzo-logo-right-text corzo-item-pdlr corzo-clearfix">
            <div class="corzo-logo-right-text-image corzo-media-image">
              <ContactIcon width={35} height={38} />
            </div>
            <div class="corzo-logo-right-text-inner">
              <div class="corzo-logo-right-text-caption">
                Have Any Questions?
              </div>
              <div class="corzo-logo-right-text-content">
                Call Now <u>+1-234-2566</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
