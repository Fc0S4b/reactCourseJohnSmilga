import React from 'react';

import ReactDom from 'react-dom';

// Nested Components, React Tools

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images.cdn2.buscalibre.com/fit-in/180x180/d4/56/d4569078d3e769ac0bbbd527c1e63db6.jpg"
    alt=""
  />
);

const Title = () => <h1>Cuando no queden más estrellas que contar</h1>;
const Author = () => <h4>María Martínez </h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
