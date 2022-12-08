import { GetServerSideProps, NextPage } from "next";

import Accounts from "../components/Accounts";
import { ApiResponseType, Cuenta } from "../utils/types";
import { baseApi } from "../utils/apiEndpoints";
import PageInfo from "../components/PageInfo";

type HomeProps = {
  accounts: Cuenta[];
  error?: Error;
};

const Home: NextPage<HomeProps> = ({ accounts, error }) => {
  return (
    <div className="w-[95%] flex-1 mx-auto  h-full">
      <PageInfo
        toptitle="Consulta el saldo"
        mainTitle="Selecciona la cuenta a consultar"
      />
      {!error && accounts.length > 0 ? (
        <Accounts accounts={accounts}>
          <div>test</div>
        </Accounts>
      ) : (
        <p>There was an error</p>
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
