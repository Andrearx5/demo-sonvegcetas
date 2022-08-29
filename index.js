alert ("Bienvenid@s a SonVegcetas");

/*Le baje la cantidad de cupos para que no se haga  tan largo*/

let cupo = 1;
let totalcupos = 2;
while (cupo <= totalcupos){

    let name = prompt("Ingrese su nombre");
    let message = prompt ("Gracias por inscribirte en nuestro curso de cocina, eres Veggie, Vegan o solo quieres aprender?");
    let age = parseInt(prompt("Ingrese su edad"));

      
     if( age <= "17"){
          alert ("Para poder participar tienes que ser mayor de edad"); 
          
        }
        else {
            let saludo = `Hola ${name} tu cupo es el nro ${cupo} el importe de los cursos es de 2000 pesos (Incluye recetario y merienda con té y budines) y 2400 pesos (Incluye degustaciones de todo el menu + recetarios.)`;
            cupo++;
            alert (saludo);


        }


}
/*Cálculo de pago*/

let precio, monto, resultado, opcionDePago, opcionValida=0;

const calcular = (precio,opcion) => {
    resultado = precio*opcion;
}

const calculoDeCuota = (cantidadDeCuotas) => {cuota = resultado/cantidadDeCuotas;}

precio = parseInt(prompt("Ingresa el precio de su curso"));

opcionDePago = parseInt(prompt(`Ingresa tu opción de pago:
    1- Efectivo (10% de descuento)
    2- Tarjetas de Débito o Crédito en 1 pago
    3- Tarjeta de Credito - 3 cuotas con interés del 8%`));


while (opcionValida===0) {

    switch(opcionDePago){

        case 1: {
            calcular(precio,0.9);
            alert(`En efectivo el total a pagar es de ${resultado} pesos`);
            opcionValida=1;
            break;
        }

        case 2: {
            calcular(precio,1);
            alert(`Con tarjeta de débito o crédito el total a pagar es de ${resultado} pesos`);
            opcionValida=1;
            break;
        }

        case 3: {
            calcular(precio,1.08);
            calculoDeCuota(3);
            alert(`Plan de 3 cuotas: 
            El total a pagar es de ${resultado} pesos.
            3 cuotas fijas de ${cuota} pesos`);
            opcionValida=1;
            break;
        }

        default: {
            alert("Opción inválida");
        }
    }
}

alert ("Los pagos se realizan el dia del curso en nuestras instalaciones. Muchas gracias por elegirnos, esperamos que lo disfrutes! nos vemos pronto.");

