import React, { useContext } from "react";
import { AccountsContext } from "./Accounts";

type ActionBtnProps = {
  text: string;
  type: "back" | "forward";
};

const ActionBtn: React.FC<ActionBtnProps> = ({ text, type }) => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(AccountsContext);

  const handleActionBtnClick = () => {
    if (type === "back" && currentPage > 0) {
      console.log("asd1");
      setCurrentPage(currentPage - 1);
    }

    if (type === "forward" && currentPage < totalPages) {
      console.log("asd2");
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <button
      className="flex flex-col justify-center items-center w-full h-full text-white bg-green-500 rounded-md shadow-sm text-2xl"
      onClick={handleActionBtnClick}
    >
      {text}
    </button>
  );
};

export default ActionBtn;
