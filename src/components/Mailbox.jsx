import React from 'react';

const Mailbox = ({ unreadMessages }) => (
  <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 && (
      <p>You have {unreadMessages.length} unread messages.</p>
    )}
  </div>
);

export default Mailbox;


// const Mailbox = ({ name, unreadMessages }) => (
//     <div>
//       <h1>Hello {name}.</h1>
//       {unreadMessages.length > 0 ? (
//         <p>You have {unreadMessages.length} unread messages.</p>
//       ) : (
//         <p>No unread messages.</p>
//       )}
//     </div>
//   );


// const Mailbox = ({ name, unreadMessages }) => (
//     <div>
//       <h1>Hello {name}.</h1>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages.`
//           : 'No unread messages.'}
//       </p>
//     </div>
//   );


// const Product = ({ imgUrl, name, price, quantity }) => (
//     <div>
//       <img src={imgUrl} alt={name} width="640" />
//       <h2>{name}</h2>
//       <p>Price: {price}$</p>
//       <h1>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h1>
//       <button type="button">Add to cart</button>
//     </div>
//   );