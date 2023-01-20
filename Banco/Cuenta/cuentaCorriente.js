import { cuenta } from "./Cuenta.js";

export class CuentaCorriente extends cuenta {
    static cantidadCuentas = 0;//atributo estatico

    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5);
    }

    
  



}