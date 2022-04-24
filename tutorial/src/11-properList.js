import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    img: 'https://images.cdn2.buscalibre.com/fit-in/180x180/d4/56/d4569078d3e769ac0bbbd527c1e63db6.jpg',
    title: 'Cuando no queden más estrellas que contar',
    author: 'María Martínez',
  },
  {
    img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/30/ea/30eab9f5ce9c6a1e4826e20c930369ca.jpg',
    title: 'Dime Quien soy',
    author: 'Julia Navarro',
  },
  {
    img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/cc/08/cc08ab6395c8b13585a6a2702e469786.jpg',
    title: 'Los guardianes',
    author: 'Grisham john',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //  console.log(book);
        // return 'hello';

        const { img, title, author } = book;
        return <Book book={book}></Book>;
        // <div>
        //   <h3>{title}</h3>
        //   <h6>{author}</h6>
        // </div>
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
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
