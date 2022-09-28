//Carrito//

// Stock libros//

let stockProductos = [
    { id: 1, nombre: "Hola Vegan", numbers: 1, precio: 5500, img: "./Imagenes/Hola-vegan.PNG"},
    { id: 2, nombre: "Comida real", numbers: 1, precio: 2880, img: "./Imagenes/comida-real.PNG"},
    { id: 3, nombre: "Cocina vegetariana", numbers: 1, precio: 2400, img: "./Imagenes/cocina-vegetariana.PNG"},
    { id: 4, nombre: "Vegan Gourmet", numbers: 1, precio: 2900, img: "./Imagenes/Vegan-gourmet.PNG"},
    { id: 5, nombre: "La cocina de Daksha", numbers: 1, precio: 5040, img: "./Imagenes/La-cocina-de-Daksha.PNG"},
  ];
  
  const booksContainer = document.getElementById("books-container");
  
  const buyContainer = document.getElementById("buy-container");
  
  const emptyButton = document.getElementById("emptybuy");
  
  const countItem  = document.getElementById("counter");

  const numbers = document.getElementById("numbers")

  const totalPrice = document.getElementById("totalPrice");
  

  
  let carrito = [];
  
  emptyButton.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
  });
  
  
  document.addEventListener("DOMcontentLoaded", () => {
    if (localStorage.getItem("carrito")){
      carrito.JSON.parse(localStorage.getItem("carrito"))
      actualizarCarrito()
    }
  });
  
  stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.className = ('producto');
    div.innerHTML = ` <img src=${producto.img} alt ="">
                      <h3>${producto.nombre}</h3>
                      <p> Precio: $ ${producto.precio}</p>
                      <button id = "Agregar ${producto.id}" class ="boton-agregar"> Agregar <i class="fa fa-shopping-cart"></i></buttton>
                     `
  
    booksContainer.appendChild(div);
  
    const boton = document.getElementById(`Agregar ${producto.id}`);
  
    // Incorporando Toastify//

    boton.addEventListener("click", () => {

      agregarAlCarrito(producto.id)
      Toastify({
        text: "Agregado al carrito",
        duration: 2500,
        style: {
          background: "linear-gradient(to right, #edc967 , #efd282)",
          right: -150,
          
        },
        }).showToast();

      
    });
  
    });
  
    //Agregando Items al carrito//

    const agregarAlCarrito = (prodId) => {


      const existe = carrito.some (prod => prod.id === prodId) 
  
      if (existe){
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.numbers++
            }
        })
    } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item);

    };
    actualizarCarrito()
    };
  
    //Eliminando Items del carrito//

    const eliminarDelCarrito = (prodId) => {
  
      const item = carrito.find((prod) => prod.id === prodId)
      const indice = carrito.indexOf(item);
      const existe = carrito.some (prod => prod.id === prodId) 

    if (existe&&item.numbers>1){
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.numbers--
            }
        })
    }
    else{carrito.splice(indice, 1) 
    }
        
    actualizarCarrito()
  
    };
  
    const actualizarCarrito =() => { 
      
      buyContainer.innerHTML= ""  
  
        carrito.forEach((prod) => {
          const div = document.createElement("div")
          div.className = ("productoEnCarrito")
          div.innerHTML = `<p>${prod.nombre}</p>
                           <p>Precio: ${prod.precio}</p>
                           <p>Cantidad: <span id="numbers">${prod.numbers}</span></p>
                           <button onclick= "eliminarDelCarrito(${prod.id})" class ="boton-eliminar"><i class= fas fa-trash-alt"></i></button>
                          `
          buyContainer.appendChild(div);
    
          localStorage.setItem("carrito", JSON.stringify(carrito))
          })
  
  
      // Sumatoria de Items y de Importe total//  
    
      countItem.innerText = carrito.length
      totalPrice.innerText = carrito.reduce((acc, prod) => acc + prod.numbers * prod.precio, 0)
    }