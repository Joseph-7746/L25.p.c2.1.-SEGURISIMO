
import Cl_PolizaDeVehiculos from "./Cl_PolizaDeVehiculos.js";


export default class Cl_Aseguradora {
  constructor() {
    this.acumPolizasDeVehiculos = 0;
    this.acumPolizasDeVida = 0;
    this.acumCorbertura = 0;
    this.contDepolizas  = 0;
    this.acumDeMontoPagado = 0;}
   
  procesarPoliza(poliza) {
    this.contDepolizas += 1
    this.acumCorbertura += poliza.Corbertura();
    if (poliza instanceof Cl_PolizaDeVehiculos) {
      this.acumPolizasDeVehiculos += poliza. montoAPagar();
    }
     else 
      this.acumPolizasDeVida += poliza.montoAPagar(); 
    }

    montoDeCorbertura() {
      return this.acumCorbertura
    }
    montoDePolizasDeVehiculos() {
      return this.acumPolizasDeVehiculos
    }
    montoDePolizasDeVida() {
      return this.acumPolizasDeVida
    }
    PromedioDeMontoPagado() {
      return (this.montoDeMontoPagado() / this.contDepolizas)
    }
    montoDeMontoPagado() {
      return  this.acumPolizasDeVehiculos + this.acumPolizasDeVida
    }




      }





