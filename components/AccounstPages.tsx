import React, { useContext, useEffect, useState } from "react";

import { AccountsContext } from "./Accounts";
import { createAccountPages } from "../utils/functions";
import { Cuenta } from "../utils/types";
import AccountsPage from "./AccountsPage";

const AccountsPages = () => {
  const { accounts, setTotalPages } = useContext(AccountsContext);
  const [pages, setPages] = useState<Cuenta[][]>([]);

  useEffect(() => {
    if (accounts.length > 0 && pages.length === 0) {
      setPages(createAccountPages(accounts));
    }

    if (pages[0] && pages.length > 0) {
      setTotalPages(pages?.length);
    }
  }, [accounts, pages]);

  return (
    <div className="h-full">
      {pages?.map((pageAccounts: Cuenta[], index: number) => {
        return (
          <AccountsPage
            key={index}
            pageAccounts={pageAccounts}
            pageIndex={index}
          />
        );
      })}
    </div>
  );
};

export default AccountsPages;
