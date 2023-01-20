export class cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {

        if (this.constructor == cuenta){
        throw new Error('No se debe instanciar objentos de la Clase Cuentas')
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {

        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;

    }

    retiroDeCuenta(valor) {
        //Método abstracto

      throw new Error ('Debe implementar el método abstracto');
    }

    _retiroDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retiroDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000
    }

    prueba() {
        console.log('Método Padre')
    }

}