import React from 'react';
import ReactDom from 'react-dom';

// CSS
// con javascript no es necesario escribir la extención
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'María Martínez';
const Book = () => {
  const title = 'Cuando no queden más estrellas que contar';
  return (
    <article className="book">
      <img
        src="https://images.cdn2.buscalibre.com/fit-in/180x180/d4/56/d4569078d3e769ac0bbbd527c1e63db6.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> error */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
