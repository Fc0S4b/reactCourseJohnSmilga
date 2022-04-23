import React from 'react';
import ReactDom from 'react-dom';

// CSS
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
      >
        {/* children props in between tags */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
          facere quae atque vel nam temporibus quas voluptatem repudiandae
          numquam?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// el nombre debe ser children
// const Book = ({ img, title, author, children }) => {
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author} </h4>
//       {children}
//     </article>
//   );
// };
const Book = (props) => {
  const { img, title, author } = props;
  // const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
      {props.children}
      {/* {children} */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
