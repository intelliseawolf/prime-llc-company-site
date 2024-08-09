const counts = [
  { id: "01", count: "10", text: "ALL TIME CLIENTS" },
  { id: "02", count: "10", text: "SUCCESSFUL PROJECTS" },
  { id: "03", count: "20", text: "EXPERT DEVELOPERS" },
  { id: "04", count: "4", text: "INDUSTRIES SERVED" },
];

const CountSection = () => {
  return (
    <div className="gdlr-core-pbf-wrapper count-section">
      <div class="gdlr-core-pbf-background-wrap">
        <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"></div>
      </div>

      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          {counts.map((count) => (
            <div
              class="gdlr-core-pbf-column gdlr-core-column-15 gdlr-core-column-first"
              id="gdlr-core-column-19"
            >
              <div class="gdlr-core-pbf-column-content-margin gdlr-core-js">
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                      style={{ paddingBottom: "50px" }}
                    >
                      <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption">
                        {count.id}
                      </span>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-left-align"
                      style={{ paddingBottom: "12px" }}
                    >
                      <div class="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font">
                        <span class="gdlr-core-counter-item-count gdlr-core-js">
                          {count.count}
                        </span>
                        <span class="gdlr-core-counter-item-suffix">+</span>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                      style={{ paddingBottom: "50px" }}
                    >
                      <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption title">
                        {count.text}
                      </span>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-left-align"
                      style={{ marginBottom: 0 }}
                    >
                      <div
                        class="gdlr-core-divider-container"
                        style={{ maxWidth: "110px" }}
                      >
                        <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
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

export default CountSection;
