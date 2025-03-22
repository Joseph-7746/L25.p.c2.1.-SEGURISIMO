import Cl_Poliza from "./Cl_Poliza.js";

export default class Cl_PolizaDeVehiculos extends Cl_Poliza  {
    constructor (id,mtoAsegurar,porCorbetura,año) {
      super(id,mtoAsegurar,porCorbetura);
      this.año = año
    }
 
    montoAPagar(){
      if(this.año <= 2000){
        return this.mtoAsegurar * 0.07}
        else 
        return this.mtoAsegurar * 0.12;
      
    }
}