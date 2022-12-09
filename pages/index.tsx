import { GetServerSideProps, NextPage } from "next";

import { AccountsContext } from "../components/Accounts";
import { ApiResponseType, Cuenta } from "../utils/types";
import { baseApi } from "../utils/apiEndpoints";
import PageInfo from "../components/PageInfo";
import AccountsPages from "../components/AccounstPages";
import { useContext, useEffect } from "react";

type HomeProps = {
  accounts: Cuenta[];
  error?: Error;
};

const Home: NextPage<HomeProps> = ({ accounts, error }) => {
  const { accounts: filteredAccounts, setAccounts } =
    useContext(AccountsContext);

  useEffect(() => {
    if (filteredAccounts.length === 0) {
      setAccounts(accounts);
    }
  }, [filteredAccounts]);

  return (
    <div className="w-[95%] flex-1 mx-auto  h-full">
      <PageInfo
        toptitle="Consulta el saldo"
        mainTitle="Selecciona la cuenta a consultar"
      />
      {!error && accounts.length > 0 ? (
        <AccountsPages />
      ) : (
        <div className="h-[80%] w-full grid place-content-center">
          <p className="text-red-600 font-semibold text-lg">
            There was an error
          </p>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (contex) => {
  try {
    const res = await fetch(baseApi);
    const data: ApiResponseType = await res.json();

    return {
      props: {
        accounts: data.cuentas,
      },
    };
  } catch (error) {
    return {
      props: {
        accounts: [],
        error,
      },
    };
  }
};

export default Home;
