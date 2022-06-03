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
