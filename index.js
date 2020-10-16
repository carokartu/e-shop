const filtroNombre = document.querySelector('#filtro');
const tarjetas = document.getElementsByClassName('product');
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategoria = document.getElementsByClassName(`category-filter`);


//*----------------------CATEGORIA------------------------------*//

for (let checkbox of filtroCategoria) {
  checkbox.oninput = () => {
    filtrarTarjetas();
  };
}

//*-----------------------NOMBRE-----------------------*//


filtroNombre.oninput = () => {
  filtrarTarjetas();
};

//*------------------------RATING------------------//

for (let checkbox of filtroRating) {
  checkbox.oninput = () => {
    filtrarTarjetas();
  };
}


//*------------------------FILTRO TARJETAS------------------//


const mostrarTarjetas = (tarjeta) => {
  return tarjeta.classList.remove("hidden");
};

const ocultarTarjetas = (tarjeta) => {
  return tarjeta.classList.add("hidden");
};

const hayAlgunaCategoriaChequeada = () => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const hayAlgunRatingSeleccionado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const hayAlgoEscritoEnInput = () => {
  return Boolean(filtroNombre.value);
};

const coincideBusquedaInputConTarjeta = (tarjeta) => {
  const nombreTarjeta = tarjeta.dataset.nombre.toLowerCase();
  const busquedaUsuario = filtroNombre.value.toLowerCase();

  if (nombreTarjeta.includes(busquedaUsuario)) {
    return true;
  } else {
    return false;
  }
};

const coincideCategoriaConTarjeta = (tarjeta) => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.value === tarjeta.dataset.categoria && checkbox.checked) {
      return true;
    }
  }
  return false;
};

const coincideRatingConTarjeta = (tarjeta) => {
  for (let checkbox of filtroRating) {
    if (checkbox.value === tarjeta.dataset.rating && checkbox.checked) {
      return true;
    }
  }
  return false;
};

const filtroInputNombre = (tarjeta) => {
  if (hayAlgoEscritoEnInput()) {
    return coincideBusquedaInputConTarjeta(tarjeta);
  } else {
    return true;
  }
};

const filtroCategoriaSeleccionada = (tarjeta) => {
  if (hayAlgunaCategoriaChequeada()) {
    return coincideCategoriaConTarjeta(tarjeta);
  } else {
    return true;
  }
};

const filtroRatingSeleccionado = (tarjeta) => {
  if (hayAlgunRatingSeleccionado()) {
    return coincideRatingConTarjeta(tarjeta);
  } else {
    return true;
  }
};

//*------------------------PASA FILTROS FINAL ------------------//

const pasaFiltros = (tarjeta) => {
  if (
    filtroInputNombre(tarjeta) == true &&
    filtroCategoriaSeleccionada(tarjeta) == true &&
    filtroRatingSeleccionado(tarjeta) == true
  ) {
    return true;
  } else {
    return false;
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    if (pasaFiltros(tarjeta)) {
      mostrarTarjetas(tarjeta);
    } else {
      ocultarTarjetas(tarjeta);
    }
  }
  mostrarCantidadDeTarjetas()
};


//*------------------------LIMPIAR FILTROS ------------------//


const limpiar = document.querySelector(".limpiar");


limpiar.onclick = () => {
  filtroNombre.value = "";
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove("hidden");
  }
  for (let checkbox of filtroRating) {
    checkbox.checked = false;
  }
  for (let checkbox of filtroCategoria) {
    checkbox.checked = false;
  }
};


//*------------------------MOSTRAR PRODUCTOS------------------//


const tarjetasVisibles = document.getElementById("productos-visibles")

 const mostrarCantidadDeTarjetas = () => {
   const tarjetasEscondidas = document.querySelectorAll(".hidden-tarjetas")
   const longitudDeTarjetasEscondidas = tarjetasEscondidas.length
   const tarjetasVisibles = 12 - longitudDeTarjetasEscondidas

   longitudDeTarjetasEscondidas.textContent = tarjetasVisibles
 }

//*------------------------LIMPIAR FILTROS ------------------//

// ----------------FILTROS RESPONSIVE---------------


const botonFiltroResponsive = document.querySelector(".filter-responsive-button")

console.log(botonFiltroResponsive)

const botonCerrarFiltro = document.querySelector(".close-filter-responsive")
console.log(botonCerrarFiltro)

const filtroAbierto = document.querySelector(".filtros.responsive")

console.log(filtroAbierto)


botonFiltroResponsive.onclick = () => {
  overlay.classList.remove("ocultar")
  document.body.classList.add("no-scroll")
  filtroAbierto.classList.add("responsive-abrir")
}

botonCerrarFiltro.onclick = () => {
  overlay.classList.add("ocultar")
  document.body.classList.remove("no-scroll")
  filtroAbierto.classList.remove("responsive-abrir")
}
// ---------------------GRILLA -------------------
const botonLista = document.querySelector(".filter-button.list");   
const botonGrilla = document.querySelector(".filter-button.grid");  

botonLista.onclick = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove("contenedor-tarjetas")
    tarjeta.classList.remove("tarjetas")
  }
  
}





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
// -------------------MODAL-------------------

const botonIrAModal = document.getElementById("comprar-checkout-modal")
const overlayModal = document.getElementById("overleyModal")
const botonSeguirComprando = document.querySelector(".seguir-comprando")

botonIrAModal.onclick  = () => {
  overlayModal.classList.remove("hidden")
  document.body.classList.add("no-scroll")
}
console.log(botonIrAModal)


botonSeguirComprando.onclick = () => {
  overlayModal.classList.add("hidden")
  document.body.classList.remove("no-scroll")

}

console.log(botonSeguirComprando)

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
