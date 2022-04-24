import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import { books } from './books';
import SpecificBook from './Book';
import { greeting } from './testing/testing';
function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

//onClick={complexExample(author)} ejecutaría de forma inmediata cuando se carga la página
ReactDom.render(<BookList />, document.getElementById('root'));
