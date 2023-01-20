import { cuenta } from "./Cuenta.js";

export class cuentaAhorro extends cuenta {
    
    constructor(cliente, numero, agencia, saldo) {
        super(cliente,numero,agencia, saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);
    }

}