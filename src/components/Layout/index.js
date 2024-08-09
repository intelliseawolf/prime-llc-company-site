import React, { useState } from "react";

import TopHeader from "./TopHeader";
import LowerHeader from "./LowerHeader";
import StickyHeader from "./StickyHeader";
import MobileMenu from "./MobileMenu";

import MainFooter from "./MainFooter";

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className={
        showMobileMenu ? "mobile-menu-visible boxed_wrapper" : "boxed_wrapper"
      }
    >
      <TopHeader />
      <LowerHeader setShowMobileMenu={setShowMobileMenu} />
      {/* <StickyHeader />
      <MobileMenu setShowMobileMenu={setShowMobileMenu} /> */}
      {children}
      <MainFooter />
    </div>
  );
};

export default Layout;
