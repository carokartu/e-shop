const filtroNombre = document.querySelector('#filtro');
const tarjetas = document.getElementsByClassName('product');
const filtroRating = document.getElementsByClassName('review-filter');

// cuando se escriba algo en el input
filtroNombre.oninput = () => {
  // recorro una a una cada tarjeta
  for (let tarjeta of tarjetas) {
    // me fijo el nombre de la tarjeta y qué buscó el usuario
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
    // si el titulo incluye lo que buscó el usuario...
    if (titulo.includes(busqueda)) {
      // le quito la clase "hidden" a la tarjeta
      tarjeta.classList.remove('hidden');
    } else {
      // se la agrego
      tarjeta.classList.add('hidden');
    }
  }
};




// recorro uno a uno los checkbox
for (let checkbox of filtroRating) {
  // si le hacen clic a uno de los checkbox
  checkbox.onclick = () => {
    // recorro una a una las tarjetas
    for (let tarjeta of tarjetas) {
      // si el checkbox esta seleccionado
      if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;
        // me fijo si el valor del checkbox es igual al rating de la tarjeta
        if (checkbox.value === rating) {
          tarjeta.classList.remove('hidden');
        } else {
          tarjeta.classList.add('hidden');
        }

        // si el checkbox NO esta seleccionado... 
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

const overlay = document.getElementById("overlay")

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