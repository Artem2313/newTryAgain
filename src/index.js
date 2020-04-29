import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const link = React.createElement(
//   'a',
//   { href: 'https://reactjs.org/', target: '_blank' },
//   `react website`,
// );

// const linkWithJSX = (
//   <a href="https://reactjs.org/" target="_blank">
//     react website
//   </a>
// );

// console.log(link);

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// // const product = React.createElement('div', null, image, title, price, button);

// /*
//  * Для передачи детей также используется свойство children параметра props.
//  * Обратите внимание на то, что свойство children это массив.
//  */
// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });

// const product = (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos with Lime</h2>
//     <p>Price: 10$</p>
//     <button type="button"> Add to cart </button>
//   </div>
// );

// console.log(product);
// ReactDOM.render(product, document.getElementById('root'));

//////

// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const App = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );

ReactDOM.render(<App />, document.getElementById('root'))
