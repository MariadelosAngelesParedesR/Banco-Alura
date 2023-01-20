import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    constructor(nombre, dni, salario){
        super(nombre, dni, salario);
    }

    verBonificación(){
       const bono = 10;
        return super._verBonificación(bono);
    } 
}