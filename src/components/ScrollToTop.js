import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    if (hash) {
      const removedHash = hash.replace("#", "");
      const releventDiv = document.getElementById(removedHash);
      releventDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, hash]);

  if (scrollPosition === 0) return null;

  return (
    <div className="scroll-to-top">
      <div className="scroll-top-inner visible">
        <div className="scroll-bar">
          <div
            className="bar-inner"
            style={{
              width:
                ((scrollPosition + document.documentElement.clientHeight) *
                  100.0) /
                  document.documentElement.scrollHeight +
                "%",
            }}
          ></div>
        </div>
        <div
          className="scroll-bar-text g_color"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Go To Top
        </div>
      </div>
    </div>
  );
}
