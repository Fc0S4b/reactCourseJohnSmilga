### import reactDOM

React.Dom.render(<Component />, document.getElementById('root'));

### JSX Rules

1. Siempre return un solo elemento (<></>, <React.Fragment></React.Fragment>)
2. onClick, className
3. Cerrar cada elemento con el closing tag />
4. paréntesis en return ()

### Nested Components, React Tools

Dentro de un componente <Greeting />

<div>
  <Person />
  <Message />
</div>

### insert CSS

import './index.css'; y luego en el componente agregar las className, en donde se crea el componente, no donde se invoca

1. css inline con style={} y para agregar varios estilos, otro objeto dentro de style. style={{color: '#617d90', marginTop: '0.2rem'}}
2. algunas librerías colocan css inline lo que puede dejar sin efecto el css importado

### JSX JavaScript

1. Se puede escribir JavaScript antes del return por ejemplo: const title= 'hello';
2. dentro del return() importar la variable JavaScript con {}, ejemplo: <h1>{title}</h1>
3. También se pueden crear variables globales fuera del componente
4. o definir desde los mismos {}, ejemplo: {let x = 5}
5. comentarios con {/\* código JS \*/}

### props

1. props es un objeto
2. Se crean en el componente: <Book job='developer'/> creará el objeto props = {job: 'developer'}
3. props pasa como parámetro en el componente que usará props
4. si el objeto tiene más elementos, se puede acceder a ellos como {props.job} desde la construcción del componente no desde donde se invoca
5. Si hay un objeto fuera del componente:
   -desde donde se invoca img={firstBook.img}
   -desde donde se construye el componente {props.img}
   -el componente construirá en base el elemento del objeto externo

### Props destructuring

1. definir JS antes del return:
   {img, title, author} = props y props como parámetro
2. la invocación es directa:
   <img src={img} />
3. otra alternativa es definirlo directamente como parámetro {img, title, author}
4. Si hay más objetos {author:{}}

### Props Children

1. Nombre debe coincidir de manera exacta
2. Children Props irá dentro del Componente invocado ej:
   <Book>
   <p>lorem ipsum</p>
   </Book>
   el párrafo sería un children prop
3. se accede al children prop colocando children al parámetro del componente que usará el prop y luego dentro del return {children}
4. si hay destructuriación, se puede omitir el children y acceder posteriormente con {props.children}
5. o simplemente escribirlo destructurado y luego usar {children}

### Simple List

1. No se puede renderizar objetos como children, si arrays
2. simple list sería con map, ej:
   names = ['john', 'peter','susan'];
   const newNames = names.map((name)=> {
   return <h1>{name}{/h1};
   })
   Pasaría como parámetro al componente newNames y luego como props {newNames}

### Proper list

1. usar map para iterar sobre objetos que están guardados dentro de un array.
   ejemplo: books.map((book)=>{
   console.log(book)
   return 'hello';
   })
2. dentro del map se puede destructurar el objeto
books.map((book) =>{
const {img, title, author} = book;
return <div>
<h3>{title}</h3>
<h3>{author}</h3>
  </div>
})
3. también se puede añadir como return el mismo componente con el objeto destructurado del map como props
   ...
   return(
   <Book book={book}></Book>
   )
4. el componente Book tendrá props destructurado y asignado a props.book, book destructurado de map no será necesario

### Key Prop and Spread Operator

1. Necesario para evitar error al crear la lista anterior iterando array con objetos
2. cada objeto del array debe tener un id:1, id:2, etc.
   desde la iteración map agregar <Book key={book.id} book={book}></Book>
3. otra forma es pasarle al map index y luego key={index}, es mejor la forma anterior porque index cambia a medida que cambia el array

Con Spread Operator

4. Pasar todas las props dentro de la iteración map con:
   {...book}
5. en la desuctruración del componente no invocado:
   const {img, title, author} = props (ya no sería = props.book)
6. o pasar directamente como parámetro {img, title, author}

### Events Basics onClick, onHover (hay muchos más en react docs)

1. se necesita un atributo y un manejador de evento eventHandler
2. los eventos en camelCase onClick y onMouseOver
3. atributo= {eventHandler} dentro del componente, no donde se invoca el componente
4. eventHandler es una función que puede ser definida antes del return o inline:
5. onClick={eventHandler(author)} se ejecutará al momento del render porque se está invocando el eventHandler
6. onClick={() => eventHandler(author)} se ejecutará al momento de onClick
7. const clickHandler = (e)=>{
   console.log(e);
   console.log(e.target)
   }
8. onMouseOver = {()=>{
   console.log(title);
   }}

### import and Export Statement

1. Como en módulos de JavaScript
2. export const books =[]
3. import {books} from './books' no necesita .js porque ya es un archivo js (si fuese .css se agrega u otro formato)
4. rafce creará un componente con nombre del archivo donde se está creando y hará export default
5. si se exporta Book como default se importa como:
   import Book from './Book'

### react hooks

#### Use State

1. se importa con import React, {useState} from 'react';
2. useState es una función que retorna un array y una función que controla el array.
3. para acceder al array y la función se puede hacer de forma destructurada: [text, setText] = useState('valor default')
4. la función obliga al componente renderizarse

#### reglas de los hooks

1. siempre empiezan con use
2. nombre del componente debe ir en uppercase
3. debe ir en la función/componente del cuerpo
4. no se puede llamar condicionalmente
5. si no se importa el hook, se puede acceder con React.useState()
6. un ejemplo de preservar valores de un objeto y solo cambiar una propiedad, es usando spread operator, ejemplo:

const [person, setPerson] = useState({
name:'peter',
age: 24,
message: 'random message',
})
const changeMessage = () =>{
setPerson({...person, message: 'hello world'});
}

Solo se cambiará message

7. se puede usar múltiple useState
8. [value, setValue] = useState(0)

setTimeout(()=>{
setValue(value + 1)
}, 2000)
no se aumentará el value a 3 después de 3 clicks ya que setValue por cada acción tomará el valor default como inicio y no el valor anterior. Para que recuerde el valor anterior, debe usar arrow function:
setvalue((prevState) =>{
return prevState + 1
})

### useEffect

1. Para cualquier trabajo fuera del componente por ejemplo: cambiar el título de la página (ejemplo: notificaciones 5 como nombre de la pestaña y que se actualiza cada vez que cambia el número de notificaciones), registrarse para una suscripción, setear addEventListener, etc.
2. import React, {useEffect} from 'react'
3. useEffect se ejecuta por default despupes de cada re-render
4. no se puede usar if(value > 1){ useEffect()}, si se puede usar useEffect(()=>{ if(value > 1){}})
