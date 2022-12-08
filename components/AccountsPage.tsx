import React, { useContext } from "react";
import { Cuenta } from "../utils/types";
import Account from "./Account";
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
  const { currentPage, totalPages, setCurrentPage } =
    useContext(AccountsContext);

  return currentPage === pageIndex ? (
    <div className="grid grid-cols-3 gap-4 h-[80%]">
      {pageIndex > 0 && <ActionBtn text="<< Opciones anteriores" type="back" />}
      {pageAccounts.map((account: Cuenta) => (
        <Account key={account.n + account.saldo} account={account} />
      ))}
      {pageIndex + 1 < totalPages && (
        <ActionBtn text="Más opciones >>" type="forward" />
      )}
    </div>
  ) : (
    <></>
  );
};
export default AccountsPage;
