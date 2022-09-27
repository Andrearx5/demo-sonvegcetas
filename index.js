
//DOM// SessionStorage // 


    let form = document.getElementById("forms");
    form.onclick = function(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        name != "" ? document.querySelector(".namealert").innerHTML = "BIENVENID@ A NUESTRO ESPACIO " + name : document.querySelector(".namealert").innerHTML = "PARA UNA MEJOR EXPERIENCIA INGRESE SU NOMBRE";

        localStorage.setItem("name", name);
    };


    let options = ["Quesos", "Dips", "Panes", "Tartas", "Muffins", "Guisos", "Sin Tacc", "Drinks"];
    let lists = document.getElementById("options");
           for(const option of options){
             let li = document.createElement("li");
             li.innerHTML = option;
             lists.append(li);
            };
         

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


  
});



