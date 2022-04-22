import React from 'react';

import ReactDom from 'react-dom';

// function Greeting() {
//   return <h4>this is brem and this is my first component </h4>;
// }

// ReactDom.render(<Greeting />, document.getElementById('root'));

// rafc abreviación emmet para crear componente con arrow function y rfc con regular function
// cuando renderizamos componentes estos deben estar en mayúsculas

// stateless functional component: es el componente react que no tiene estado.
// always return JSX: Siempre un componente debe devolver algo sino arroja error

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>this is brem and this is my first component </h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };

// JSX Rules
// return single element
// div / section /article or Fragment
// use camelCase for html attribute onClick en vez de onclick
// className instead of class
// close every element <img src="" alt="" />
// formatting se puede usar o no los paréntesis luego de un return, pero
// si no lo usas, debes colocar lo que se retorna desde la misma línea del return porque sino al guardar, el formato le dará punto y coma al return e ignorará lo que venga después de eso
// don't place at all div div div, use section /article or fragment
// <React.Fragment></React.Fragment> una forma de crear un div contenedor
// <></> o usar tags de cierre
function Greeting() {
  return (
    <div className="">
      <h1>hello world </h1>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
