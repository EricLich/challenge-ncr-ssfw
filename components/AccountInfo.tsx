import Router from "next/router";
import React from "react";
import { Cuenta, TipoCuenta, tipoCuenta } from "../utils/types";

type AccountInfoProps = {
  account: Cuenta;
};

const AccountInfo: React.FC<AccountInfoProps> = ({ account }) => {
  const accountType =
    tipoCuenta[account.tipo_letras as TipoCuenta].fullDescription;

  return (
    <div className="w-full h-[80%] grid place-content-center">
      <div className="flex flex-col items-start gap-5 text-2xl">
        <button onClick={() => Router.back()}>back</button>
        <p>
          Saldo de la cuenta: {account.moneda}
          {account.saldo}
        </p>
        <p>Tipo de cuenta: {accountType}</p>
        <p>Número de cuenta: {account.n}</p>
      </div>
    </div>
  );
};

export default AccountInfo;
