const items = [
  {
    number: "01",
    title: "Innovative Solutions",
    text: "We provide cutting-edge software development services tailored to your business needs. Our expert team ensures the highest quality and efficiency in delivering robust software solutions.",
  },
  {
    number: "02",
    title: "Custom Development",
    text: "Our custom software development services are designed to meet the unique requirements of the organization. From initial concept to final, we offer comprehensive support and expertise.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    text: "We prioritize quality in every project. Our rigorous testing processes ensure that your software is reliable, secure, and performs optimally in any environment.",
  },
];

const TopicSection = () => {
  return (
    <div
      className="gdlr-core-pbf-wrapper"
      style={{ paddingTop: "45px", paddingBottom: "75px" }}
    >
      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          {items.map((item) => (
            <div
              className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
              id="gdlr-core-column-1"
              key={item.number}
            >
              <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                <div className="gdlr-core-pbf-background-wrap"></div>
                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                  <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                      <span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption">
                        {item.number}
                      </span>
                    </div>
                  </div>
                  <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                      <div className="gdlr-core-title-item-title-wrap ">
                        <h3
                          className="gdlr-core-title-item-title gdlr-core-skin-title"
                          style={{
                            fontSize: "28px",
                            fontWeight: 600,
                            color: "#1b1b1b",
                          }}
                        >
                          <span className="gdlr-core-title-item-left-dot"></span>
                          {item.title}
                          <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                      <div className="gdlr-core-text-box-item-content">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-left-align">
                      <div
                        className="gdlr-core-divider-container"
                        style={{ maxWidth: "160px" }}
                      >
                        <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
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

export default TopicSection;
