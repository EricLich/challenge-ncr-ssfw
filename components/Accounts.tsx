import React, { createContext, ReactNode } from "react";

type AccountsContextValues = {
  totalPages: number | null;
  currentPage: number | null;
};

const AccountsContext = createContext<AccountsContextValues>({
  totalPages: null,
  currentPage: null,
});

type AccountsProps = {
  children: ReactNode;
};

const Accounts: React.FC<AccountsProps> = ({ children }) => {
  return (
    <AccountsContext.Provider value={{ currentPage: 0, totalPages: 0 }}>
      <div>{children}</div>
    </AccountsContext.Provider>
  );
};

export default Accounts;
