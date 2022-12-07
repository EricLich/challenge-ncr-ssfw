import React from "react";
import LogoutBtn from "./LogoutBtn";

const Footer = () => {
  return (
    <div className="w-full h-[100px] border-t border-slate-200">
      <div className="w-[95%] h-full mx-auto flex justify-items-start items-center">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Footer;
