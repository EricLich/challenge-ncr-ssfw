import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SiteHead from "./SiteHead";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SiteHead />
      <div className="w-screen h-screen grid place-content-center">
        <div className="w-[1024px] h-[768px] bg-slate-100 flex flex-col justify-between rounded-md overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
