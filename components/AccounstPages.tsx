import React, { useContext, useEffect, useState } from "react";
import { createAccountPages } from "../utils/functions";
import { Cuenta } from "../utils/types";

import { AccountsContext } from "./Accounts";

const AccountsPages = () => {
  const { accounts, currentPage, maxBtnsPerPage, totalPages, setCurrentPage } =
    useContext(AccountsContext);
  const [pages, setPages] = useState<Cuenta[][]>(new Array(totalPages));

  useEffect(() => {
    accounts.length > 0 && setPages(createAccountPages(accounts));
  }, [accounts]);

  console.log(pages);

  /* array of arrays from accounts to then pass the ncecessary account to each page */

  return <div className="">{}</div>;
};

export default AccountsPages;
