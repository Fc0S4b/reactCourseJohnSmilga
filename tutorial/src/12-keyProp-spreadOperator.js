import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    img: 'https://images.cdn2.buscalibre.com/fit-in/180x180/d4/56/d4569078d3e769ac0bbbd527c1e63db6.jpg',
    title: 'Cuando no queden más estrellas que contar',
    author: 'María Martínez',
  },
  {
    id: 2,
    img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/30/ea/30eab9f5ce9c6a1e4826e20c930369ca.jpg',
    title: 'Dime Quien soy',
    author: 'Julia Navarro',
  },
  {
    id: 3,
    img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/cc/08/cc08ab6395c8b13585a6a2702e469786.jpg',
    title: 'Los guardianes',
    author: 'Grisham john',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
// otra solución
// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book , index) => {
//         const { img, title, author } = book;
//         return <Book key={index} book={book}></Book>;
//       })}
//     </section>
//   );
// }

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props; esta es una opción usando props como parámetro
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
