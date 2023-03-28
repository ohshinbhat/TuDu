import React from 'react'
import Content from './content'
import './index.css'
import Header from './Header'
import { useState } from 'react';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "react playlist"
    },
    {
        id: 2,
        checked: false,
        item: "clean"
    },
    {
        id: 3,
        checked: false,
        item: "DSA"
    }
]);

  const handleCheck = (id) =>{
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
      setItems(listItems);
      localStorage.setItems('todolist',JSON.stringify(listItems));
  }

  const handleDelete = (id) =>{
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItems('todolist',JSON.stringify(listItems));
  }
  

  return (
    <div className='App'>
      <Header />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />

      
    </div>
  )
}

export default App;