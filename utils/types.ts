export type Cuenta = {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: Moneda;
  tipo_letras: TipoCuenta;
}

export type Cuesta = {
  id: number;
  nombre: string;
}

export enum Moneda {
  ARS = "$",
  USD = "u$s",
  UYU = "$uy",
  BS = "bs",
}

export const tipoCuenta = {
  CC: { apiReturned: 'CC', fullDescription: "Cuenta Corriente" },
  CC2: { apiReturned: 'Cc', fullDescription: "Cc" },
  CA: { apiReturned: 'CA', fullDescription: "Caja de Ahorro" },
  CCP: { apiReturned: 'CCP', fullDescription: "CCP" },
};

export type TipoCuenta = keyof typeof tipoCuenta;

export type ActionBtnType = "back" | "forward";


export type ApiResponseType = {
  cuentas: Cuenta[];
  cuestas: Cuesta[];
}