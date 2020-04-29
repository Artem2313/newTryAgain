import React from 'react';
import Panel from './Panel';
import Dropdown from './DropdownWithStyledComponents/Dropdown';
import ProductList from './ProductList';
import products from '../product.json';
import Button from './Button/Button';
import ButtonModule from './ButtonCssModules/ButtonModule';
import ButtonVanilaCss from './ButtonVanilaCss/ButtonVanilaCss';
import ButtonClassnames from './ButtonClassnames/ButtonClassnames';
import ButtonStyledComponent from './ButtonStyledComponents/ButtonStyledComponent';



const App = () => (
  <div>
    {/* <ButtonStyledComponent label="ButtonStyledComponent" disabled={false}/> */}
    {/* <ButtonClassnames label="ButtonClassnames" disabled={false}/>
    <ButtonModule label="ButtonModule" disabled={false}/>
    <Button label="Button" icon="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" disabled={false}/>
    <ButtonVanilaCss label="ButtonVanilaCss" icon="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" disabled={true}/> */}
    <Dropdown isOpen={true} />

    {/* <Panel title="Top Products">
      <ProductList items={products} />
    </Panel> */}
  </div>
);

export default App;
