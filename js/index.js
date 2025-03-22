
import Cl_PolizaDeVida from "./Cl_PolizaDeVida.js";
import Cl_PolizaDeVehiculos from "./Cl_PolizaDeVehiculos.js";
import  Cl_Aseguradora from "./Cl_Aseguradora.js"



let aseguradora = new Cl_Aseguradora(),
polizaVida1 = new Cl_PolizaDeVida(22,1000,80,18),
polizaVida2= new Cl_PolizaDeVida(11,500,90,22),
polizaVida3= new Cl_PolizaDeVida(55,2000,70,18),
polizaVida4= new Cl_PolizaDeVida(88,1500,90,30),
polizaVehiculo1 = new Cl_PolizaDeVehiculos(33,2000,80,2000),
polizaVehiculo2 = new Cl_PolizaDeVehiculos(90,1500,90,2005),
polizaVehiculo3 = new Cl_PolizaDeVehiculos(77,1000,90,1995),
polizaVehiculo4 = new Cl_PolizaDeVehiculos(44,2500,85,2010);



aseguradora.procesarPoliza(polizaVida1);
aseguradora.procesarPoliza(polizaVida2);
aseguradora.procesarPoliza(polizaVida3);
aseguradora.procesarPoliza(polizaVida4);
aseguradora.procesarPoliza(polizaVehiculo1);
aseguradora.procesarPoliza(polizaVehiculo2);
aseguradora.procesarPoliza(polizaVehiculo3);
aseguradora.procesarPoliza(polizaVehiculo4);
let salida = document.getElementById("salida");

let mostrarPoliza = (poliza) => {
   return `<tr>
    <td>${poliza.id}</td>
    <td>${poliza.mtoAsegurar}</td>
    <td>${poliza.porCorbetura}</td>
     <td>${poliza.año }</td>
     <td>${poliza.edad}</td>
    <td>${poliza.Corbertura()}</td>
    <td>${poliza.montoAPagar()}</td>
    </tr>`;
  };
    salida.innerHTML = `
    <table>
    <tr> 
       <th> ID </th>
       <th> Monto asegurado </th>
       <th> porcentaje </th>
        <th> edad </th>
         <th> año </th>
       <th> Corbertura </th>
       <th> Monto a pagar </th>
        
    </tr>
    ${mostrarPoliza(polizaVida1)}
    ${mostrarPoliza(polizaVida2)}
    ${mostrarPoliza(polizaVida3)}
    ${mostrarPoliza(polizaVida4)}
    ${mostrarPoliza(polizaVehiculo1)}
    ${mostrarPoliza(polizaVehiculo2)}
    ${mostrarPoliza(polizaVehiculo3)}
    ${mostrarPoliza(polizaVehiculo4)}
    </table>
    <br> Monto de corbertura: ${aseguradora.montoDeCorbertura()}
    <br> Monto de polizas de vehiculos: ${aseguradora.montoDePolizasDeVehiculos()}
    <br> Monto de polizas de vida: ${aseguradora.montoDePolizasDeVida()}
    <br> Monto de monto pagado: ${aseguradora.montoDeMontoPagado()}
    <br> Promedio de monto pagado: ${aseguradora.PromedioDeMontoPagado()}
    `;
