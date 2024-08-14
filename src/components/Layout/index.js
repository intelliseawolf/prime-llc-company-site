import React from "react";

import TopHeader from "./TopHeader";
import LowerHeader from "./LowerHeader";
import MobileMenu from "./MobileMenu";

import MainFooter from "./MainFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <LowerHeader />
      <MobileMenu />
      {children}
      <MainFooter />
    </div>
  );
};

export default Layout;
