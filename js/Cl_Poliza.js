export default class Cl_Poliza { 
    constructor(id,mtoAsegurar,porCorbetura) {
      this.id = id;
      this.mtoAsegurar = mtoAsegurar;
      this.porCorbetura = porCorbetura;
    }
    Corbertura(){
      return (this.mtoAsegurar * this.porCorbetura)/100;
    }
    montoAPagar(){
      return 0;
    }
  }