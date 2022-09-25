//Carrito//

let carrito = []

let list_books = [
    { id: 1, nombre: "Hola Vegan", cantidad: 3, precio: 5500, img: "./Imagenes/Libro hola vegan.webp"},
    { id: 2, nombre: "Comida real", cantidad: 5, precio: 2880, img: "./Imagenes/Libro comida real.webp"},
    { id: 3, nombre: "Cocina vegetariana", cantidad: 4, precio: 2400, img: "./Imagenes/Cocina vegetariana.webp"},
    { id: 4, nombre: "Vegan Gourmet", cantidad: 5, precio: 2900, img: "./Imagenes/Vegan gourmet.webp"},
    { id: 4, nombre: "La cocina de Daksha", cantidad: 3, precio: 5040, img: "./Imagenes/La cocina de Daksha.webp"},
  ];

const listbookbox = document.getElementById("bookbox");


list_books.forEach((books) => {
    const div = document.createElement ("div");
    div.classlist.add('books');
    div.innerHTML = ` 
    <img src=${books.img} alt ="">
    <h3>${books.nombre}</h3>
    <p class = "prices"> Precio: $ ${books.precio}</p>
    <button id = "Agregar ${books.id}" class = "button-add"> Agregar <i class fas fa-shopping-cart"></i></buttton>
    `

    bookbox.appendChild(div);

    });




//DOM// SessionStorage // 

/*

    let form = document.getElementById("forms");
    form.onclick = function(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        name != "" ? document.querySelector(".namealert").innerHTML = "BIENVENID@ A NUESTRO ESPACIO " + name : document.querySelector(".namealert").innerHTML = "PARA UNA MEJOR EXPERIENCIA INGRESE SU NOMBRE";

        sessionStorage.setItem("name", name);

}

  /*  let options = ["Quesos", "Dips", "Panes", "Tartas", "Muffins", "Guisos", "Sin Tacc", "Drinks"];
    let lists = document.getElementById("options");
           for(const option of options){
             let li = document.createElement("li");
             li.innerHTML = option;
             lists.append(li);
            }
         

//Eventos// LocalStorage // 

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
    
    localStorage.setItem("newsegment", JSON.stringify(newsegment)); 

    //let totalElections = [];
    let totalElections = localStorage.getItem("newsegment");
    


  

});

 
*/
