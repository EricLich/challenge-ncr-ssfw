export type Cuenta = {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: Moneda;
  tipo_letras: TipoLetras;
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

export enum TipoLetras {
  CC = "Cuenta Corriente",
  Cc = "Cc",
  CA = "Caja de Ahorro",
  CCP = "CCP",
}

export type ApiResponseType = {
  cuentas: Cuenta[];
  cuestas: Cuesta[];
}