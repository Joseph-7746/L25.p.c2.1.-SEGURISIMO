import Cl_Poliza from "./Cl_Poliza.js";

export default class Cl_PolizaDeVida extends Cl_Poliza  {
  constructor(id,mtoAsegurar,porCorbetura,edad) {
    super(id,mtoAsegurar,porCorbetura);
    this.edad = edad
  }

  montoAPagar(){
     if(this.edad <= 18){
      return this.mtoAsegurar * 0.05}
      else 
      return this.mtoAsegurar * 0.10;
  }

}