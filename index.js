
//DOM// LocalStorage // 

    let form = document.getElementById("forms");
    form.onclick = function(e){
        
        e.preventDefault();
        let name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        let nameOutput = localStorage.getItem("name")
        name != "" ? document.querySelector(".namealert").innerHTML = "BIENVENID@ A NUESTRO ESPACIO " + nameOutput : document.querySelector(".namealert").innerHTML = "PARA UNA MEJOR EXPERIENCIA INGRESE SU NOMBRE";

        
    };

    document.querySelector(".nameOutput").innerHTML = localStorage.getItem("name")


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





