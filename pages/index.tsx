import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";

import PageInfo from "../components/PageInfo";
import { baseApi } from "../utils/apiEndpoints";
import { ApiResponseType } from "../utils/types";

type HomeProps = {
  accounts: any;
};

const Home: NextPage<HomeProps> = ({ accounts }) => {
  console.log(accounts);

  return (
    <div className="w-[95%] mx-auto pt-8">
      <PageInfo
        toptitle="Consulta el saldo"
        mainTitle="Selecciona la cuenta a consultar"
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (contex) => {
  const res = await fetch(baseApi);
  const data: ApiResponseType = await res.json();

  return {
    props: {
      accounts: data.cuentas,
    },
  };
};

export default Home;
