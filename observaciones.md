Querida Caro, 

Hiciste un gran trabajo. Desde que ingresamos a tu web se nota que pusiste esfuerzo, que te esmeraste en seguir el diseño propuesto y seguir las funcionalidades solicitadas.  

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web, aunque noto algunos divs de mas. Usas bien las etiquetas aria-hidden, aunque se apreciarian algunas etiquetas aria extra para asistir a quien no puede ver tu web (por ejemplo, en el boton para cerrar el carrito)
Tus imagenes no tienen atributos "alt". Recorda que estos sirven para que un lector de pantalla le pueda decir al usuario de que se trata esa imagen. Si bien hay debate respecto de la conveniencia de utilizarlos en e-commerce, era un requisito de este trabajo. 


### Filtros y búsqueda

Tus filtros funcionan a la perfeccion, y me gusta mucho como lograste la integracion con responsive. 

Nota que tus tarjetas no se filtran cuando estas en modalidad columna en lugar de grilla. Seria bueno solucionar eso. 

Lamento que no lograras la funcionalidad para contar los productos, porque estuviste re cerca! Actualmente tu funcion es esta:

```js
const tarjetasVisibles = document.getElementById("productos-visibles")
console.log(tarjetasVisibles)
 const mostrarCantidadDeTarjetas = () => {
   const tarjetasEscondidas = document.querySelectorAll(".hidden-tarjetas")
   const longitudDeTarjetasEscondidas = tarjetasEscondidas.length
   const tarjetasVisibles = 12 - longitudDeTarjetasEscondidas

   
   longitudDeTarjetasEscondidas.textContent= tarjetasVisibles
 }
 ```

 Nota que tenes dos variables con el mismo nombre (tarjetasVisibles) y eso es fuente de errores para JS y de confusiones para nosotras como devs. Cambiemos el nombre de una. Por ejemplo, llamemos a la segunda "cantidadDeTarjetasVisibles". Eliminemos el console log, que ya sabes que no debe estar en un trabajo entregado. La seccion de las tarjetas escondidas tiene el problema de que no tenes tarjetas con la clase "hidden-tarjetas", sino que son elementos que tienen a la vez la clase "product" y la clase "hidden". Seleccionemoslos asi:

```js
const tarjetasEscondidas = document.querySelectorAll(".product.hidden")
```

El resto de tu codigo esta perfecto, solo tenemos que decirle a HTML que muestre ese numero. Actualmente decis "longitudDeTarjetasEscondidas.textContent", pero eso no tiene sentido para JS porque longitudDeTarjetasEscondidas es un numero. Lo que queremos es seleccionar al elemento de HTML que va a mostrar ese numero: lo que definiste como tarjetasVisibles. Para que sea mas prolijo, pongamosla adentro de tu funcion:

```js

 const mostrarCantidadDeTarjetas = () => {
   const tarjetasVisibles = document.getElementById("productos-visibles")
   const tarjetasEscondidas = document.querySelectorAll(".product.hidden")
   const longitudDeTarjetasEscondidas = tarjetasEscondidas.length
   const cantidadDeTarjetasVisibles = 12 - longitudDeTarjetasEscondidas

   
   tarjetasVisibles.textContent = cantidadDeTarjetasVisibles
 }
 ```

 Con ese cambio, ya tu codigo funciona. Eso si, agreguemos tambien la ejecucion de esta funcion al momento de limpiar los filtros. 

### Carrito

Tu carrito esta muy bien! La maqueta esta muy prolija y siguiendo muy bien las pautas. Con respecto al funcionamiento,  el modal de vaciar por lo que veo no esta implementado. Deberia aparecer al hacer click en el boton de vaciar. 

### Checkout

Falta atencion al maquetado aqui, se ve todo mas desprolijo que el resto de tu web. Por ejemplo nota que el placeholder de tu email no llega a verse entero, y eso es porque le falta width al input. Los tamaños y distancias tampoco respetan tan bien el modelo como en el resto de tu sitio. 

 El boton de "Finalizar" deberia ser un input type="submit" o un button type="submit" para permitir que el formulario se pueda enviar, y la etiqueta form deberia llegar hasta ese boton. Los dos input de email y nombre incluyen el atributo "required" para que se hagan obligatorios, y el usuario no pueda terminar la compra si no estan completados, pero al no estar rodeados de la etiqueta form no cumplen esa funcion. 

### Misc 

Tu HTML esta muy bien en general, al igual que tu CSS. Se aprecia un marcado avance desde el TP anterior. El aspecto visual de tu web es excelente, especialmente en los lugares donde se nota que te esmeraste en que quedara igual al modelo. 

Entiendo que el tiempo no estuvo de tu lado, pero eventualmente valdria la pena que te sentaras a acomodar el responsive especialmete en el checkout. Muchisima gente va a ver tu web desde su celular y esta bueno darles una muestra de lo que podes hacer cuando no tenes una fecha de entrega persiguiendote, especialmente si queres agregar este trabajo a un portfolio. 

Menciono la calidad de tu css, prolijo, claro, bien hecho. Se nota muchisimo tu avance y aprendizaje aqui. Lo mismo ocurre con tu Javascript: mas alla de los detalles que te menciono, lo veo muy bien hecho, ordenado, prolijo, con poquisimos errores y con un evidente esfuerzo involucrado.  

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento.
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅  Funciones pequeñas.
✔️ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 8
