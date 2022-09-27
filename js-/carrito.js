//Carrito//

//libros//

let stockProductos = [
    { id: 1, nombre: "Hola Vegan", cantidad: 1, precio: 5500, img: "../Imagenes/Hola-vegan.PNG"},
    { id: 2, nombre: "Comida real", cantidad: 1, precio: 2880, img: "../Imagenes/comida-real.PNG"},
    { id: 3, nombre: "Cocina vegetariana", cantidad: 1, precio: 2400, img: "../Imagenes/cocina-vegetariana.PNG"},
    { id: 4, nombre: "Vegan Gourmet", cantidad: 1, precio: 2900, img: "../Imagenes/Vegan-gourmet.PNG"},
    { id: 5, nombre: "La cocina de Daksha", cantidad: 1, precio: 5040, img: "../Imagenes/La-cocina-de-Daksha.PNG"},
  ];
  
  const contenedorProductos = document.getElementById("contenedor-productos");
  
  const contenedorCarrito = document.getElementById("carrito-contenedor");
  
  const botonVaciar = document.getElementById("vaciarCarrito");
  
  const contadorCarrito = document.getElementById("contador-carrito");

  const cantidad = document.getElementById("cantidad")

  const precioTotal = document.getElementById("precioTotal");
  

  
  let carrito = [];
  
  botonVaciar.addEventListener("click", () => {
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
    div.innerHTML = ` 
    <img src=${producto.img} alt ="">
    <h3>${producto.nombre}</h3>
    <p> Precio: $ ${producto.precio}</p>
    <button id = "Agregar ${producto.id}" class ="boton-agregar"> Agregar <i class="fa fa-shopping-cart"></i></buttton>
    `
  
    contenedorProductos.appendChild(div);
  
    const boton = document.getElementById(`Agregar ${producto.id}`);
  
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id)
    })
  
    });
  

    const agregarAlCarrito = (prodId) => {

      const existe = carrito.some (prod => prod.id === prodId) 
  
      if (existe){
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item);

    };
    actualizarCarrito()
    };
  
    const eliminarDelCarrito = (prodId) => {
  
      const item = carrito.find((prod) => prod.id === prodId)
      const indice = carrito.indexOf(item);
      const existe = carrito.some (prod => prod.id === prodId) 

    if (existe&&item.cantidad>1){
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad--
            }
        })
    }
    else{carrito.splice(indice, 1) 
    }
        
    actualizarCarrito()
  
    };
  
    const actualizarCarrito =() => { 
      
      contenedorCarrito.innerHTML= ""  
  
        carrito.forEach((prod) => {
          const div = document.createElement("div")
          div.className = ("productoEnCarrito")
          div.innerHTML = `<p>${prod.nombre}</p>
                           <p>Precio: ${prod.precio}</p>
                           <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                           <button onclick= "eliminarDelCarrito(${prod.id})" class ="boton-eliminar"><i class= fas fa-trash-alt"></i></button>
                          `
          contenedorCarrito.appendChild(div);
    
          localStorage.setItem("carrito", JSON.stringify(carrito))
          })
  
  
        
    
      contadorCarrito.innerText = carrito.length
      precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }