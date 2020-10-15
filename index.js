const filtroNombre = document.querySelector('#filtro');
const tarjetas = document.getElementsByClassName('product');
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategoria = document.getElementsByClassName(`category-filter`);





// ---------------------------- FILTRO NOMBRE -------------------------

filtroNombre.oninput = () => {
  
  for (let tarjeta of tarjetas) {
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
    
    
    if (titulo.includes(busqueda.toLowerCase())) {
      
      tarjeta.classList.remove('hidden');
    } else {
    
      tarjeta.classList.add('hidden');
    }
  }
};



// const filtrarTarjetaPorNombre = (tarjeta) => {
//   const nombreTarjeta = tarjeta.dataset.nombre;
//   const busqueda = filtroNombre.value;
    
//   if (nombreTarjeta.includes(busqueda.value.toLowerCase())){
//     return true }
//     else {
//       return false 
//     }
    
//   }

// console.log(filtrarTarjetaPorNombre);
//  ---------------------------FILTRO RATING ----------------------

  // const ratingChequeado = () => {
  //   for (let checkbox of filtroRating) {
  //     if (checkbox.checked) {
  //       return true
  //     }
  //     else {
  //       return false 
  //     }
  //   }
  // }
 
 




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


// ------------------------FILTRO CATEGORIA ---------------------------

 
// const categoriaChequeada = () => {
//    for (let checkbox of filtroCategoria){
    
//     if (checkbox.checked) {
//       return true
//     }
//      else {
//        return false 
//      }
//    }
    
// }



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


// const pasaFiltros = (tarjeta) =>{

// if (hayAlgoEscritoEnElinput()) {
//   if (filtrarTarjetaPorNombre(tarjeta)){
//     return true 
//   }
//   else return false }

// else{
//   return true 
// } 


// if (hayCategoriaChequeada()) {
//   if (categoriaChequeada(tarjeta))
// }


// const boton = document.getElementById('limpiar')
// const busqueda = document.getElementById(`filtro`)
// const checkboxes = document.querySelectorAll(`review-filter`)


// const limpiarFiltro = () => {

//   busqueda.value = ``
// }


// const limpiarCheck = () => {

//   for (let checkbox of checkboxes) {

//     checkbox.checked = false
//   }
// }


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


// ---------------------GRILLA -------------------

// const botonLista = document.querySelector("filter-button list");   
// const botonGrilla = document.querySelector("filter-button");  
// const 



// botonLista.onclick = () => {

//   for (let tarjeta of tarjetas)
  
//   tarjetas.classList.remove("contenedor-tarjetas")

// console.log(tarjeta)  

// }

// -------------------MODAL-------------------


const mostrarSubtotal = document.querySelector("#subtotal")
const mostrarDescuento = document.querySelector("#descuento")
const mostrarEnvio = document.querySelector("#envio")
const mostrarRecargo = document.querySelector("#recargo")
const mostrarTotal = document.querySelector("#total")

const radioEfectivo = document.querySelector("#input-efectivo")
const radioCredito = document.querySelector("#input-credito")
const checkboxEnvio = document.querySelector("#input-envio")
const checkboxDescuento = document.querySelector("#input-descuento")

const parrafoDescuento = document.querySelector(".descuento")
const parrafoEnvio = document.querySelector(".envio")
const parrafoRecargo = document.querySelector(".recargo")

const subtotal = 100

mostrarSubtotal.textContent = subtotal
mostrarTotal.textContent = subtotal

const obtenerGastoEnvio = (subtotal) => {
return subtotal +50
}

const obtenerRecargo = (subtotal) => {
    let recargo = subtotal * 0.1
    return  subtotal + recargo
}

const obtenerDescuento = (subtotal) => {
    let descuento = subtotal * 0.1
    return  subtotal - descuento
}


radioEfectivo.oninput = () => {
    mostrarSubtotal.textContent = subtotal
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

checkboxDescuento.oninput = () => {
    parrafoDescuento.classList.toggle("hidden")
    mostrarDescuento.textContent = subtotal - obtenerDescuento(subtotal) 
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

radioCredito.oninput = () => {
    parrafoRecargo.classList.remove("hidden")
    mostrarRecargo.textContent =  obtenerRecargo(subtotal) - subtotal
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

checkboxEnvio.oninput = () => {
    parrafoEnvio.classList.toggle("hidden")
    mostrarEnvio.textContent = 50
    mostrarTotal.textContent = obtenerTotal(subtotal)
}



const obtenerTotal = (subtotal) => {
    let descuento = 0
    let recargo = 0
    let gastosDeEnvio = 0
    if(checkboxDescuento.checked) {
        descuento = obtenerDescuento(subtotal) - subtotal
    }
    if(radioCredito.checked) {
        recargo = obtenerRecargo(subtotal) - subtotal
    }
    else {
        parrafoRecargo.classList.add('hidden')
    }
    if(checkboxEnvio.checked) {
        gastosDeEnvio = obtenerGastoEnvio(subtotal) - subtotal
    }
    return subtotal + descuento + recargo + gastosDeEnvio

}