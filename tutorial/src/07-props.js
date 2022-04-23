import React from 'react';
import ReactDom from 'react-dom';

// CSS
// con javascript no es necesario escribir la extención
import './index.css';
// setup vars
const firstBook = {
  img: 'https://images.cdn2.buscalibre.com/fit-in/180x180/d4/56/d4569078d3e769ac0bbbd527c1e63db6.jpg',
  title: 'Cuando no queden más estrellas que contar',
  author: 'María Martínez',
};
const secondBook = {
  img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/30/ea/30eab9f5ce9c6a1e4826e20c930369ca.jpg',
  title: 'Dime Quien soy',
  author: 'Julia Navarro',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
// function BookList() {
//   return (
//     <section className="booklist">
//       <Book job="developer" />
//       <Book title="random title" number={22} />
//     </section>
//   );
// }

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author} </h4>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// };
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
