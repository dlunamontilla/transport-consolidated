import { elementos } from "./elementos.js";

const imagenSVG = () => {
  const _elementos = elementos( "[data-src$='svg']");

  _elementos.forEach( _elemento => {
    fetch ( _elemento.dataset.src )
      .then(function( respuesta) {
        return respuesta.text();
      })
      .then(function( datos ) {
        _elemento.innerHTML = datos;
        _elemento.removeAttribute("data-src");

        console.log( _elemento );
      })
  });
}

export { imagenSVG };