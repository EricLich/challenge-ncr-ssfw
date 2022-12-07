export type Cuenta = {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: Moneda;
  tipo_letras: TipoLetras;
}

export type cuesta = {
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