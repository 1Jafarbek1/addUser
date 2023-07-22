import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setnewItem] = useState("");
  const [items, setItems] = useState([])

  function addItem() {

    if (!newItem) {
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setnewItem("");
    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1 className='HeaderOne'>Add User</h1>

      <input className='input' type='text' placeholder='Add User...' value={newItem} onChange={e => setnewItem(e.target.value)}/>

      <button className='addButton' onClick={() => addItem()}>Add</button>

      <ul className='ul'>
        {items.map(item => {
          return(
            <li className='ki' key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)} className='clearBtn'>❌</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
