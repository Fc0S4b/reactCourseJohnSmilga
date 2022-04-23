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
];
const names = ['john', 'peter', 'susan'];
const newName = names.map((name) => {
  // console.log(name);
  return <h1>{name}</h1>;
});
console.log(newName);

function BookList() {
  return (
    <section className="booklist">
      {/* {books} no puede react renderizar objetos */}
      {newName}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
