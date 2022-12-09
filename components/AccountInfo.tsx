import Router from "next/router";
import React from "react";
import { Cuenta, TipoCuenta, tipoCuenta } from "../utils/types";

type AccountInfoProps = {
  account: Cuenta;
};

const AccountInfo: React.FC<AccountInfoProps> = ({ account }) => {
  const accountType =
    tipoCuenta[account.tipo_letras as TipoCuenta]?.fullDescription;

  return (
    <div className="w-full h-[80%] grid place-content-center">
      <div className="flex flex-col items-start gap-5 text-2xl">
        <p>
          Saldo de la cuenta: {account?.moneda}
          {account?.saldo}
        </p>
        <p>Tipo de cuenta: {accountType}</p>
        <p>
          Número de cuenta: {account?.n !== " " ? account?.n : "Desconocido"}
        </p>
        <button
          onClick={() => Router.back()}
          className="self-center py-2 px-4 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 duration-300 text-base"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
