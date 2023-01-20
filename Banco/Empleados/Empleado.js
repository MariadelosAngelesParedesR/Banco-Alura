export class Empleado{
    #nombre;
    #dni;
    #salario;
    #clave;


    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    }

    verBonificación(){
        return this.#salario;
    }

    _verBonificación(bono){
        return this.#salario + this.#salario*bono/100;
    }
}