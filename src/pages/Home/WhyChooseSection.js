import Collapsible from "react-collapsible";

const contents = [
  {
    title: "Premium Software Development",
    text: "A dedicated team providing top-tier software solutions tailored to exceed your business expectations. We focus on delivering quality and innovation.",
  },
  {
    title: "Innovative Technology",
    text: "Leveraging the latest technologies to create advanced and efficient software solutions. Stay ahead with our cutting-edge tech.",
  },
  {
    title: "User-Friendly Design",
    text: "Our designs ensure that your software is intuitive and easy to use, enhancing user satisfaction and productivity.",
  },
  {
    title: "Reliable Support",
    text: "Receive continuous support and maintenance to keep your software running smoothly with minimal downtime.",
  },
];

const WhyChooseSection = () => {
  return (
    <div className="gdlr-core-pbf-wrapper why-choose-section">
      <div className="gdlr-core-pbf-background-wrap"></div>
      <div class="gdlr-core-pbf-background-wrap" style={{ top: "30px" }}>
        <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"></div>
      </div>

      <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
        <div
          class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
          id="gdlr-core-column-11"
        >
          <div class="gdlr-core-pbf-column-content-margin gdlr-core-js">
            <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
              <div class="gdlr-core-pbf-element">
                <div class="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr">
                  <div class="gdlr-core-image-item-wrap gdlr-core-media-image gdlr-core-image-item-style-rectangle">
                    <img
                      src="/assets/why-choose-left.png"
                      alt=""
                      width="560"
                      height="570"
                      title="hp3-about-2-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="gdlr-core-pbf-column gdlr-core-column-30"
          id="gdlr-core-column-12"
        >
          <div
            class="gdlr-core-pbf-column-content-margin gdlr-core-js"
            style={{ padding: "20px 0px 40px 0px" }}
          >
            <div class="gdlr-core-pbf-background-wrap"></div>
            <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
              <div class="gdlr-core-pbf-element">
                <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                  <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption">
                    <span class="gdlr-core-title-item-left-dot"></span>
                    Big Name Customers
                  </span>
                  <div class="gdlr-core-title-item-title-wrap ">
                    <h3 class="gdlr-core-title-item-title gdlr-core-skin-title">
                      Why Customers Choose Us
                      <span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="gdlr-core-pbf-element">
                <div class="gdlr-core-accordion-item gdlr-core-item-mglr gdlr-core-item-mgb  gdlr-core-accordion-style-icon gdlr-core-icon-pos-left gdlr-core-with-divider">
                  {contents.map((content) => (
                    <Collapsible
                      trigger={content.title}
                      key={content.title}
                      className="collapse-item"
                    >
                      <p className="collapse-text">{content.text}</p>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
