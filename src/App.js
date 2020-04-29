import React from 'react';
import Panel from './components/Panel';
import ProfileDetails from './components/ProfileDetails';
import Mailbox from './components/Mailbox';
import Dropdown from './components/Dropdown';
import BookList from './components/BookList';
import ProductList from './components/ProductList';
import products from './product.json';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];


const App = () => (
  <div>
    <BookList books={favouriteBooks}/>
    <Dropdown isOpen={true}/>
    <Mailbox unreadMessages={[1,2,3]}/>
    <Panel title="title">
      <ProfileDetails name="mango" email="a@a.com" />
    </Panel>
    <Panel title="Top Products">
    <ProductList items={products}/>  
    </Panel>        
  </div>
);

export default App;
