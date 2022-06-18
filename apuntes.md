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
5. el segundo parámetro de useEffect es para decir que solo se ejecute en el render iniciar useEffect(()=>{}, []), tiene nombre de lista de dependencias
6. dentro de la lista de dependencias pueden ir los valores que deseas que ejecuten re-render cada vez que cambian, ejemplo [value] con value+1 en useState onClick
7. Puede usarse múltiples useEffect
8. la cleanup function es una función que libera la carga de memoria al detectar eventos del useEffect, se puede evitar el re-renderizado usando una lista de dependencias vacía pero es de buena práctica configurar una función de limpieza por ejemplo:
   useEffect(()=>{
   window.addEventListener('resize', checkSize);
   return () =>{
   window.removeEventListener('resize', checkShize)
   }
   })
   sin removeEventListener, se cargaría la memoria con cada window.addEventListener
9. no se puede usar una función async await dentro del hook useEffect, porque el hook no retorna una promise
10. para hacer fetch(url) a una api con useEffect, debes setear la función promise aparte y luego invocarla en useEffect con la lista de dependencia vacía
11. Otra forma es recoger la promise con then, ejemplo:
    fetch(url).then((resp) => {
    if(resp.status >= 200 && resp.status <==299){
    return resp.json()
    }
    else{
    setIsLoading(false);
    setIsError(true);
    throw new Error(resp.statusText);
    }
    }).then((user) => { const {login}= user;
    setUser(login);
    setIsLoading(false);}).catch((error) => console.log(error))
    el catch está atrapando el network error, no el 404 del dato api no encontrado por eso se configura un if dentro del then(resp)
12. ver useEffect - fetch data para un ejemplo de fetch api + map y render el objeto destructurado
13. condicional rendering: componentes que se ejecutan en base de una condición

### sobre componentes

1. multiple returns en componentes con sentencias if-else, por ejemplo un loading si el estado es falso y el componente cargado si el estado es verdadero
2. los useState que son booleano se escriben con is de forma convencional [isLoading, setIsLoading] = useState(false)
3. short-circuit evaluation:
   [text, setText] = useState('');
   const firstValue = text || 'hello world';
   falso o verdadero = verdadero, se muestra hello world
   const secondValue = text && 'hello world';
   falso y verdadero = falso, se muestra ''
   Puede ser con componentes {show && <Item />}
4. togglear un booleano con onClick={()=> setIsError(!isError)} y combinado con un {isError && <h1>Error...</h1>}.Con ternary operator:
{isError ? (<p>there is an error...</p>) : (<div>
<h2>there is no error</h2>
</div>)}.

### forms

1. el input va a estar atado al state de value (así como en JS se usa input.value para acceder al valor del input)
2. para conectar un label a un input, label usará el atributo que usará el id del input htmlFor="firstName"
3. input usará type al igual que html, otro atributo llamado id="firstName" y name="firstName"
4. un btn dentro de un form por defaul es tipo submit aunque no lo tengas como atributo
5. onSubmit={handleSubmit} como atributo en form junto con una función que maneja la acción al hacer submit el form
6. el handleSubmit si no tiene e.preventDefault() no se ejecutará lo que tenga la función ya que el navegador por default se actualizará al momento de hacer submit el form
7. también puede usarse en un botón onClick ={handleSubmit}

### controlled inputs

1. para conectar un input a un valor de estado, se usa value= {firstName} y con [firstName, setFirstName] = useState('')
2. el input no podrá modificarse porque tiene definido '', el value del input debe ir unido a un onChange={(e)=> setFirstName(e.target.value)} se accede al valor del evento detector del objeto con e.target.value

### add items to the list

1. asignando un nuevo state con [], se puede modificar este state si los valores de estado del form son ingresados (son verdaderos), esta asignación se haría en el handleSubmit luego del e.preventDefault
   ejemplo:
   const [people, setPeople] = useState([])
   if(firstName && email){
   const person = {firstName, email} //que es lo mismo que {firstName:firstName, email:email}
   setPeople((people => {
   return [...people, person]
   }))
   // volver a setear las cadenas vacías para los inputs
   setFirstName('')
   setEmail
   } else{
   console.log('empty values')
   }
2. uuid package npm para hacer id única, otra forma es setearla según fecha actual, person = {id: new Date().getTime().toString()}

### multiple inputs

1. se puede usar solo un useState que englobe todos los inputs [person, setPerson] = useState({firstName: '', email: '', age: ''})
2. value será value = {person.firstName} y así sucesivamente.
3. onChange será onChange = {handleChange}
4. botón submit tendrá onClick = {handleSubmit} cuya función tendrá e.preventDefault
5. handleChange tendrá name = e.target.name y value = e.target.value (ahora se está usando el atributo name del form)
6. la gracia de usar name y value es que se puede acceder a las propiedades dinámicas de objetos (JS)
7. handleChange tendrá setPerson({...person, [name]:value}) rest operator para ir tomando los valores antiguos y el array name fijado en value que es lo mismo que si escribiese firstName: value si corresponde el input a firstName, se escribe así porque lo hace dinámicamente, de lo contrario al escribir en la casilla age se agregaría los valores a firstName
8. revisa el código de multiple inputs para ver lo que se hace con handleSubmit, básicamente se recoge los inputs en un objeto si es que son verdaderos, un id, y esto se pasa a setPeople, para luego dejar setPeople en '' cada input

### otros

1. usa quokka.js para ver resultado en el mismo script
2. para entender objetos dinámcos ve este ejemplo:
   let appState= 'loading';
   const app = {
   [appState]: true
   }
   console.log(app); // {loading: true}
   const keyName = 'computer';
   app[keyName] = 'apple';
   console.log(app) // {loading: true, computer: 'apple'}

   Una función para agregar datos a un objeto sería:
   primero definir el objeto:
   const state = {
   loading: true,
   name: '',
   job: ''
   }
   function udpateState(key, value){
   state[key] = value
   }

   updateState('name', 'john');
   console.log(state) {loading:true, name: 'john', job:''}

3. copy to clipboard: navigator.clipboard.writeText(valor a copiar) esto se puede setear con onClick en alguna sección html

### useRef

1. para inputs sin control
2. useRef es muy parecido a useState, la diferencia es que no activa re-render
3. preserva los valores y apunta a nodos o elementos del DOM como uso más común
4. se importa como import React, {useRef} from 'react'
5. se apunta a un atributo de referencia definiendo primero const refContainer = useRef(null) (modo ejemplo)
6. el atributo en el cual se invoca useRef se llama ref, ejemplo: <input ref={refContainer}>
7. refContainer será un objeto con la propiedad current {current: null}
8. no se necesitará useState u onChange para preservar valores del input, al hacer refContainer.current.value en el handleSubmit, se guardará el valor actual del input en el refContainer
9. se puede definir más de un useRef
10. si se usa ref={divContainer} dentro de un div, con divContainer = useRef(null), entonces divContainer.current será ese mismo div con su contenido
11. lo interesante sería usar useRef en el momento en que la app hace render. Como ejemplo, se usa refContainer.current.focus en un useEffect sin lista de dependencias ya que useRef no activa re-render (al recargar la página, automáticamente se llevará el foco a la casilla input)

### useReducer - useState setup

1. agrega más estructura al estado, no recomendable para casos simples ya que ahí se usa mas useState
2. depende en gran medida de redux
3. al usar useReducer se usa state y dispatch: [state, dispatch] = useReducer(reducer), siempre se debe pasar reducer, que es como una función de reducción que toma el estado anterior y toma la "acción" y devuelve un nuevo estado. reducer se definiría simplemente como una función afuera del componente:
   const reducer = (state, action) =>{

}
state se ejecutará cuando se ejecute dispatch "dispatch the action"

useReducer usa como parámetro un valor default que se puede definir directamente o como objeto aparte
const defaultState = {
people: [],
isModalOpen: false,
modalContent: 'hello world'
}
useReducer(reducer, defaultState) 4. para acceder al estado isModalOpen, simplemente sería con state.isModalOpen 4. la función reducer manejará dispatch, es decir si dispatch recibe como parámetro dispatch({type: 'TESTING'}), entonces la función reducer responderá a este llamado. Siempre reducer debe devolver el state actualizado sino el resto la funcionalidad en el componente no tendrá sentido. El state dentro del reducer se encarga de actualizar el defaultState definido anteriormente.
Ya que se invoca dispatch({type: 'TESTING'}), reducer accede a esta propiedad desde el action, ej:
if(action.type === 'TESTING){
si es verdadero entonces se modifica el estado anterior tomando en cuenta sus propiedades determinadas y cambiando sus valores
return {
...state,
people: data,
isModalOpen: true,
modalContent: 'item added'
}
}
si no es verdadero el action.type se puede devolver un throw new Error('no matching action type'), pero de esta forma se puede devolver distinto tipo de acciones según distintas condicionales 4. dispatch puede recibir más propiedades, por ejemplo:
const newItem = {id: new Date().getTime().toString(), name};
dispatch({type: 'ADD_ITEM', payload: newItem})
entonces dentro del reducer, se podrá manejar el payload definiendo por ejemplo:
const newPeople = [...state.people, action.payload] (state.people tomará los valores antiguos de people);
el objeto que retornará usará los nuevos items
people: newPeople

4. es recomendable siempre recoger los valores defualt del state y luego escribir los que vas a modificar
   {...state, isModalOpen: true, modalContent: 'please enter value'}
5. algunos prefieren usar switch en la función reducer en vez de usar varios if

   #### useReducer -remove item

6. definir un nuevo dispacth({type: 'CLOSE_MODAL'}) como función que se usará como props para modal. closeModal() se ejecutará dentro del modal como parte de un useEffect ya que tendrá como función eliminar el item después de unos segundos.
7. el botón para remover el item llamará al dispatch con onClick pasándole también el payload: people.id para después comparar con el action.payload y conservar los items que no son removidos en la lista desplegable

### prop-drilling

1. consiste en pasar las props entre componentes, desde donde se crea el props, pasando por componentes que no necesitan ese props pero que si deben pasarse y llegando al componente final donde va a ser usado. Context Api y useContext facilita esta prácticas

### useContext hook

1. al igual que los hooks anteriores, se debe importar desde react
2. se crea un context , ejemplo:
   const PersonContext = React.createContext()
3. se debe definir dos componentes: el proveedor y el consumidor (antes se usaba el consumidor pero con la actual versión no se usa)
4. el proveedor funciona como un distribuidor
5. Hay un wrapper que envuelve lo que retorna el componente. A estos wrappers se les puede pasar value con algún valor
   <PersonContext.Provider value='hello'></PersonContext.Provider>
6. desde un componente hijo, se puede acceder al valor de PersonContext usando el hook
   const data = useContext(PersonContext);
7. value en el wrapper posee los props que pasarás a los componentes hijos y así no hay que pasarlos desde donde mismo se invoca los componentes
8. para acceder al props desde el componente donde se va a usar, debe destructurarse el objeto ejemplo:
   const {removePerson} = useContext(PersonContext)
9. propDrilling se puede seguir haciendo y mejor hasta 2 o 3 niveles, ya cuando son proyectos mas grandes es mejor usar useContext
10. siempre debes pasar un objeto children al wrapper de provider ya que si no, no se podrá aplicar para visualizar el contenido que está envolviendo
    ejemplo:
    const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
    };
11. para no tener que exportar el AppProvider para luego invocarlo en algún componente junto con el hook de useContext, se puede exportar todo de una vez para importar solo la función que lo engloba:
    export const useGlobalContext = () => {
    return useContext(AppContext);
    };

### custom hooks -useFetch

1. para reducir funcionalidades, tales como fetch, localstorage, algo por el estilo
2. se configura como módulo aparte con nombre de useNombredelHookPersonalizado
3. dentro del hook personalizado se configura la funcionalidad que luego será usado en el componente principal, por ejemplo fetch, si es fetch, entonces el hook personalizado recibirá como parámetro url, se le puede agregar estados y efectos para loading y error.
4. desde el componente principal se debe importar el hook personalizado (no olvidar exportar el módulo anteriormente).
5. el hook personalizado retorna un objeto que tiene como propiedad los estados (como loading y la respuesta de fetch).
6. desde el componente principal se accede al objeto retornado del hook personalizado mediante destructuración y con el parámetro que necesita, ejemplo: const { loading, products } = useFetch(url);

### ProTypes setup
