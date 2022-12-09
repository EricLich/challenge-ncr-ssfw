import React, { useContext } from "react";
import { ActionBtnType } from "../utils/types";
import { AccountsContext } from "./Accounts";

type ActionBtnProps = {
  text: string;
  type: ActionBtnType;
};

const ActionBtn: React.FC<ActionBtnProps> = ({ text, type }) => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(AccountsContext);

  const handleActionBtnClick = () => {
    if (type === "back" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }

    if (type === "forward" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <button
      className="flex flex-col justify-center items-center w-full h-full text-white bg-green-500 rounded-md shadow-sm text-2xl hover:bg-green-600 duration-200"
      onClick={handleActionBtnClick}
    >
      {text}
    </button>
  );
};

export default ActionBtn;
