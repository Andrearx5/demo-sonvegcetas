alert ("Bienvenid@s a SonVegcetas");

//Le baje la cantidad de cupos para que no se haga  tan largo


let cupo = 1;
let totalcupos = 1;
while (cupo <= totalcupos){

    let name = prompt("Ingrese su nombre");
    let message = prompt ("Gracias por inscribirte en nuestro curso de cocina, eres Veggie, Vegan o solo quieres aprender?");
    let age = parseInt(prompt("Ingrese su edad"));

    const namename = document.querySelector(".namealert").innerHTML = "Bienveni@ a nuestro espacio " + name; 
      
    if( age <= "17"){
          alert ("Para poder participar tienes que ser mayor de edad"); 
          
    }
    else{
            let saludo = `Hola ${name} tu cupo es el nro ${cupo} el importe de los cursos es de 2000 pesos (Incluye recetario y merienda con té y budines) y 2400 pesos (Incluye degustaciones de todo el menu + recetarios.)`;
            cupo++;
            alert (saludo);
    }
    

}

        

//Cálculo de pago//

/*let precio, monto, resultado, opcionDePago, opcionValida=0;

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


//Funcion constructora- estudiantes inscritos en el curso- objetos//

function Students(name, alimentacion, edad){
    this.name = name;
    this.alimentacion = alimentacion;
    this.edad = edad;

}

const studentOne = new Students("daniela", "vegana", 37);
const studentTwo = new Students("andrea", "veggie", 34);
console.log(studentOne);
console.log(studentTwo);

//Arrays//
/*
alert("Sorpresa: Incorporamos libros a nuestra tienda!!")


  let libros = [
    { id: 1, nombre: "Cocina facil", precio: 1000 },
    { id: 2, nombre: "Como comer mejor", precio: 1100 },
    { id: 3, nombre: "Recetarios veganos", precio: 500 },
    { id: 4, nombre: "La nueva salud", precio: 700 },
  ];

   libros.forEach(item => {
   alert(item.nombre);
});

  let answer = prompt("Le gustaria agregar un libro a su curso?");

  if (answer === "si") {

    let nombre = prompt("Ingrese el nombre de su compra");
    let libro = libros.find((el) => el.nombre === nombre);
    let mensaje = ` Id: ${libro.id}
    Nombre: ${libro.nombre}
    Precio: ${libro.precio}`;
    alert(mensaje);
  }

      else if(answer === "no"){

    let mensaje = "Muchas Gracias, saludos.";
    alert(mensaje);

    };*/

//DOM//

    let options = ["Quesos", "Dips", "Panes", "Sin Tacc", "Drinks"];
    let lists = document.getElementById("options");
           for(const option of options){
             let li = document.createElement("li");
             li.innerHTML = option;
             lists.append(li);
}

//Eventos//

    const option1 = document.querySelector(".option1");

    const biggest = () =>{
        option1.style.transform = "scale(1.3)";

    };

    const smaller = () =>{
        option1.style.transform = "scale(1.0)";

    }

    option1.addEventListener("mouseenter", biggest);

    option1.addEventListener("mouseleave", smaller);


    let newsegment = [];
    let info = document.getElementById("info");
    let boxs = document.getElementById("boxs");
    let elections= "Quieres agregar: "

    info.addEventListener("submit", (event) => {
        event.preventDefault();
        boxs.innerHTML = "";
        let inputs = event.target.children;
        newsegment.push(inputs[0].value);

    newsegment.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = (elections + item);
        boxs.append(div);
  })

})






