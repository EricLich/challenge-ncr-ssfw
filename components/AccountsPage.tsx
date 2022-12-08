import React, { ReactNode, useContext } from "react";
import { Cuenta } from "../utils/types";
import { AccountsContext } from "./Accounts";
import ActionBtn from "./ActionBtn";

type AccountsPageProps = {
  pageIndex: number;
  pageAccounts: Cuenta[];
};

const AccountsPage: React.FC<AccountsPageProps> = ({
  pageAccounts,
  pageIndex,
}) => {
  const { currentPage, maxBtnsPerPage, totalPages, setCurrentPage } =
    useContext(AccountsContext);
  return (
    <div className="grid grid-cols-3 gap-4">
      {currentPage > 0 && (
        <ActionBtn text="<< Opciones anteriores" type="back" />
      )}

      {currentPage < totalPages && (
        <ActionBtn text="Más opciones >>" type="forward" />
      )}
    </div>
  );
};

export default AccountsPage;
