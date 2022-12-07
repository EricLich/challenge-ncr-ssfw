import React from "react";

type PageInfoProps = {
  toptitle: string;
  mainTitle: string;
};

const PageInfo: React.FC<PageInfoProps> = ({ toptitle, mainTitle }) => {
  return (
    <div className="w-auto mx-auto flex flex-col justify-center items-center">
      <p className="text-lg text-slate-500">{toptitle}</p>
      <h2 className="text-4xl">{mainTitle}</h2>
    </div>
  );
};

export default PageInfo;
