
import './App.css';
import { useState } from 'react';
import { ProductsTable } from './components/ProductsTable.jsx';
function App() {
  const[search, setSearch] = useState('');
  const[inStockONly,setinStockOnly] = useState(false);

  const handleChange = (e) =>{
    setSearch(e.target.value);
  };
  const toggleInStock = (e) => {
    setinStockOnly(e.target.checked);
  }
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
  return (
    <div className="App">
      <input onChange={handleChange} value={search} placeholder='Search...' />
      <div>
        <input id="checkbox" type="checkbox" onChange={toggleInStock} checked={inStockONly}/> 
        <label htmlFor="checkbox">Show Only products in stockm</label>
      </div>
      <ProductsTable category="Fruits" products={products}/>
    </div>
  );
}

export default App;
