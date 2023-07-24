import { useState } from 'react';
import './App.css';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


  
function App() {

  
const [addItem, addedItem] = useState([])

const addProduct =(item) =>{
  addedItem([...addItem,item])
  }
  const removeProduct =(item) =>{
    addedItem(addItem.filter((cartItem) => cartItem.id !== item.id))
 }

  return (
    <div className="App">
     <Header  Cartcount={addItem.length}/>
     <Content
     addProduct={addProduct}
     removeProduct={removeProduct}
      />
     <Footer/>
    </div>
  );
}

export default App;