//alert ("Bienvenid@s a SonVegcetas");
//let name = prompt("Ingrese su nombre");
//const namename = document.querySelector(".namealert").innerHTML = "BIENVENID@ A NUESTRO ESPACIO " + name; 

//STORAGE//

    let user;
    let userStorage = sessionStorage.getItem("user");
    if(userStorage){
      let message = `Hola ${userStorage} gracias por volver!`;
      alert(message);
    }else{
      user = prompt("Ingrese su nombre");
      sessionStorage.setItem("user", user);
      alert("Bienvenid@ a SonVegcetas");
    } 

//JSON//

    let books = [
         { id: 1, nombre: "Cocina facil", precio: 1000 },
         { id: 2, nombre: "Como comer mejor", precio: 1100 },
         { id: 3, nombre: "Recetarios veganos", precio: 500 },
         { id: 4, nombre: "La nueva salud", precio: 700 },
    ];

    localStorage.setItem("books", JSON.stringify(books));


//DOM//

    let options = ["Quesos", "Dips", "Panes", "Tartas", "Muffins", "Guisos", "Sin Tacc", "Drinks"];
    let lists = document.getElementById("options");
           for(const option of options){
             let li = document.createElement("li");
             li.innerHTML = option;
             lists.append(li);
            }


//Eventos//

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


/*const option1 = document.querySelector(".option1");
    const option2 = document.querySelector(".option2");
    const option3 = document.querySelector(".option3");

    const biggest = () =>{
        option1.style.transform = "scale(1.3)";
        option2.style.transform = "scale(1.4)";
        option3.style.transform = "scale(1.2)";
    };

    const smaller = () =>{
        option1.style.transform = "scale(1.0)";
        option2.style.transform = "scale(1.0)";
        option3.style.transform = "scale(1.0)"

    }

    /*option1.addEventListener("mouseenter", biggest);
    option2.addEventListener("mouseenter", biggest);
    option3.addEventListener("mouseenter", biggest);

    option1.addEventListener("mouseleave", smaller);
    option2.addEventListener("mouseleave", smaller);
    option3.addEventListener("mouseleave", smaller);*/







