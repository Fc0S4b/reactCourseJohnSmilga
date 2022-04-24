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

const Book = ({ img, title, author }) => {
  // attribute, eventHandker
  // onClick, onMouseOver (mas eventos en react docs)
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
//onClick={complexExample(author)} ejecutaría de forma inmediata cuando se carga la página
ReactDom.render(<BookList />, document.getElementById('root'));
