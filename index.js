alert ("Bienvenid@s a SonVegcetas");

let cupo = 1;
let totalcupos = 3;
while (cupo <= totalcupos){

    let name = prompt("Ingrese su nombre");
    let message = prompt ("Gracias por inscribirte en nuestro curso de cocina, eres Veggie, Vegan o solo quieres aprender?");
    let age = parseInt(prompt("Ingrese su edad"));

      
     if( age <= "17"){
          alert ("Para poder participar tienes que ser mayor de edad"); 
          
        }
        else {
            let saludo = `Hola ${name} tu cupo es el nro ${cupo} pronto nos comunicaremos contigo`;
            cupo++;
            alert (saludo);


        }

}        
