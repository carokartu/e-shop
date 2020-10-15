const filtroNombre = document.querySelector('#filtro');
const tarjetas = document.getElementsByClassName('product');
const filtroRating = document.getElementsByClassName('review-filter');

filtroNombre.oninput = () => {
  
  for (let tarjeta of tarjetas) {
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
    
    if (titulo.includes(busqueda)) {
      
      tarjeta.classList.remove('hidden');
    } else {
    
      tarjeta.classList.add('hidden');
    }
  }
};




for (let checkbox of filtroRating) {
 
  checkbox.onclick = () => {
    
    for (let tarjeta of tarjetas) {
     
      if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;
       
        if (checkbox.value === rating) {
          tarjeta.classList.remove('hidden');
        } else {
          tarjeta.classList.add('hidden');
        }

       
      } 
      else {
        tarjeta.classList.remove('hidden');
      }
    }
  };
}

const filtroCategoria = document.getElementsByClassName(`category-filter`);


for (let checkbox of filtroCategoria) {

  checkbox.onclick = () => {
    for (let tarjeta of tarjetas){
      if (checkbox.checked) {
        const category = tarjeta.dataset.value;
        console.log(category)
        if (checkbox.value === category) {

          tarjeta.classList.remove('hidden');
        } else {
          tarjeta.classList.add('hidden');
        }
     
      }
      else {
        tarjeta.classList.remove('hidden');
      }
    }
  }
}


const boton = document.getElementById('limpiar')
const busqueda = document.getElementById(`filtro`)
const checkboxes = document.querySelectorAll(`review-filter`)


const limpiarFiltro = () => {

  busqueda.value = ``
}


const limpiarCheck = () => {

  for (let checkbox of checkboxes) {

    checkbox.checked = false
  }
}


// boton.onclick = () => {

//   limpiarFiltro()

//   console.log(limpiarFiltro())

//   limpiarCheck()

//   console.log(limpiarCheck())
// }



// ----------------CARRITO---------------


const botonAbrirCarrito = document.querySelector(".boton-carrito")

console.log(botonAbrirCarrito)

const botonCerrarCarrito = document.querySelector(".close-cart")
console.log(botonCerrarCarrito)

const carritoAbierto = document.querySelector(".cart-open")

console.log(carritoAbierto)

const overlay = document.getElementById("overlay ocultar")

console.log(overlay)


botonAbrirCarrito.onclick = () => {
  overlay.classList.remove("ocultar")
  document.body.classList.add("no-scroll")
  carritoAbierto.classList.add("abrir-carrito")
}

botonCerrarCarrito.onclick = () => {
  overlay.classList.add("ocultar")
  document.body.classList.remove("no-scroll")
  carritoAbierto.classList.remove("abrir-carrito")
}