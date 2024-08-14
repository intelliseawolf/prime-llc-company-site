import PhoneIcon from "../../components/Icon/phone";
import EmailIcon from "../../components/Icon/email";
import LocationIcon from "../../components/Icon/location";

const information = [
  {
    id: 1,
    icon: <PhoneIcon />,
    title: "Phone",
    description: "Contact Us Over Phone",
    value: "(650) 521-9948",
  },
  {
    id: 2,
    icon: <EmailIcon />,
    title: "Email",
    description: "Contact Us With Email",
    value: "shavar@pwavetechnologies.com",
  },
  {
    id: 3,
    icon: <LocationIcon />,
    title: "Address",
    description: "375 Baskins Rd, Rock Hill, SC 29730",
    value: "View On Google Map",
    link: "https://www.google.com/maps/place/375+E+Baskins+Rd,+Rock+Hill,+SC+29730/data=!4m2!3m1!1s0x885689ee5f63f8a7:0x3120b8cf2ab24c69?sa=X&ved=1t:242&ictx=111",
  },
];

const Information = () => {
  return (
    <div class="gdlr-core-pbf-wrapper information-section">
      <div
        class="gdlr-core-pbf-background-wrap"
        style={{ backgroundColor: "#d32525" }}
      >
        <div class="gdlr-core-pbf-background"></div>
      </div>
      <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
        <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          {information.map((item) => (
            <div
              class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
              key={item.id}
            >
              <div
                class="gdlr-core-pbf-column-content-margin gdlr-core-js "
                style={{ padding: "50px 20px 0px 20px" }}
              >
                <div class="gdlr-core-pbf-background-wrap"></div>
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js fadeInUp">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                      style={{ paddingBottom: "40px", color: "white" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                      style={{ paddingBottom: "25px" }}
                    >
                      <div class="gdlr-core-title-item-title-wrap ">
                        <h3
                          class="gdlr-core-title-item-title gdlr-core-skin-title"
                          style={{ color: "white" }}
                        >
                          {item.title}
                          <span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                      style={{ paddingBottom: "0px" }}
                    >
                      <div
                        class="gdlr-core-text-box-item-content"
                        style={{ textTransform: "none" }}
                      >
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                      <div
                        class="gdlr-core-text-box-item-content"
                        style={{ textTransform: "none" }}
                      >
                        <p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "white" }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </p>
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

export default Information;
