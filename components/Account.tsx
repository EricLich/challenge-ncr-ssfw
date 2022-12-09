import Link from "next/link";
import React from "react";
import { Cuenta, tipoCuenta, TipoCuenta } from "../utils/types";

type AccountProps = {
  account: Cuenta;
};

const Account: React.FC<AccountProps> = ({ account }) => {
  console.log(account.tipo_letras);
  return (
    <Link
      href={{
        pathname: `/account/${account?.n}`,
        query: account,
      }}
      className="flex flex-col justify-center items-center w-full h-full text-white bg-green-500 rounded-md shadow-sm gap-2"
    >
      <h3 className="text-2xl">
        {tipoCuenta[account.tipo_letras as TipoCuenta]?.fullDescription}
      </h3>
      <p className="text-2xl">Nro: {account.n}</p>
    </Link>
  );
};

export default Account;
