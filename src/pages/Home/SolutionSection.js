import SoftwareIcon from "../../components/Icon/software";
import WebIcon from "../../components/Icon/web";
import MobileIcon from "../../components/Icon/mobile";
import CloudIcon from "../../components/Icon/cloud";
import EnterpriseIcon from "../../components/Icon/enterprise";
import TestingIcon from "../../components/Icon/testing";

const solutions = [
  {
    title: "Software Development",
    text: "Tailored software solutions for your business needs.",
    icon: <SoftwareIcon />,
  },
  {
    title: "Web Development",
    text: "Responsive websites to enhance user engagement.",
    icon: <WebIcon />,
  },
  {
    title: "Mobile App Development",
    text: "Innovative mobile applications for seamless user experiences.",
    icon: <MobileIcon />,
  },
  {
    title: "Cloud Solutions",
    text: "Scalable and secure cloud solutions for your business.",
    icon: <CloudIcon />,
  },
  {
    title: "Enterprise Solutions",
    text: "Robust software to streamline business processes.",
    icon: <EnterpriseIcon />,
  },
  {
    title: "QA & Testing",
    text: "Comprehensive testing to ensure software reliability.",
    icon: <TestingIcon />,
  },
];

const SolutionSection = () => {
  return (
    <div className="gdlr-core-pbf-wrapper solution-section">
      <div class="gdlr-core-pbf-background-wrap">
        <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js solution-background"></div>
      </div>
      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          <div
            class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
            id="gdlr-core-column-3"
          >
            <div
              class="gdlr-core-pbf-column-content-margin gdlr-core-js "
              style={{ padding: "0px 0px 50px 0px" }}
            >
              <div class="gdlr-core-pbf-background-wrap"></div>
              <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                <div class="gdlr-core-pbf-element">
                  <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                    <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption solution">
                      <span class="gdlr-core-title-item-left-dot solution"></span>
                      Our Expertise
                    </span>
                    <div class="gdlr-core-title-item-title-wrap ">
                      <h3 class="gdlr-core-title-item-title gdlr-core-skin-title solution">
                        Solution For Business Challenges
                        <span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {solutions.map((item) => (
            <div
              class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
              id="gdlr-core-column-4"
            >
              <div class="gdlr-core-pbf-column-content-margin gdlr-core-js gdlr-core-move-up-with-shadow solution">
                <div class="gdlr-core-pbf-background-wrap solution item">
                  <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js solution"></div>
                </div>
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr"
                      style={{ paddingBottom: "40px" }}
                    >
                      <div
                        class="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle"
                        style={{
                          borderWidth: "0px",
                          maxWidth: "62px",
                          marginTop: "30px",
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                      style={{ paddingBottom: "20px" }}
                    >
                      <div class="gdlr-core-title-item-title-wrap ">
                        <h3
                          class="gdlr-core-title-item-title gdlr-core-skin-title "
                          style={{
                            fontSize: "28px",
                            fontWeight: 600,
                            color: "#000000",
                          }}
                        >
                          {item.title}
                          <span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space"
                      style={{ paddingBottom: "20px" }}
                    >
                      <div
                        class="gdlr-core-text-box-item-content"
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                          textTransform: "none",
                          color: "#6c6c6c",
                        }}
                      >
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
