import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";

import PageInfo from "../components/PageInfo";
import { baseApi } from "../utils/apiEndpoints";
import { ApiResponseType, Cuenta } from "../utils/types";

type HomeProps = {
  accounts: Cuenta[];
  error?: Error;
};

const Home: NextPage<HomeProps> = ({ accounts, error }) => {
  return (
    <div className="w-[95%] mx-auto pt-8">
      <PageInfo
        toptitle="Consulta el saldo"
        mainTitle="Selecciona la cuenta a consultar"
      />
      {!error && accounts.length > 0 ? (
        <p>{accounts[0].tipo_letras}</p>
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
