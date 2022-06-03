import { useState } from 'react';
import AddItem from './AddItem';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
//     {
//         id:1,
//         checked: false,
//         item: 'Almonds'
//     },
//     {
//         id:2,
//         checked: true,
//         item: 'Apples'
//     },
//     {
//         id:3,
//         checked: false,
//         item: 'Brush'
//     },
// 

const setAndSaveItems= (newItems) => {
  setItems(newItems)
  localStorage.setItem(JSON.stringify(newItems))
}

const addItem=(item)=>{
 const id = items.length? items[items.length-1].id+1 : 1
 const newItem = {id, checked:false, item}
 const listItems= [...items, newItem]
 setAndSaveItems(listItems)

}
const handleSubmit= (e)=>{
  e.preventDefault()
  if(!newItem) return
  addItem(newItem);
  setNewItem('');
}

const onChange = (id)=> {
  const updatedList = items.map((item)=> item.id === id? {...item,
  checked: !item.checked}: item)
  setAndSaveItems(updatedList)
//이렇게 저장해놓으면 다시 로드했을때 마지막으로 저장된 값 불러와짐.
}

const handleDelete= (id) =>{  
  const updatedList = items.filter((item)=> item.id !== id)
   setAndSaveItems(updatedList)
}

  return (
   <div className='App'>
     <Header title="Jin's Shopping List"/>
  
     <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
     <SearchItem
     search={search}
     setSearch={setSearch}
     />
      <Contents 
      items={items.filter(items => ((items.item).toLowerCase()).includes
      (search.toLowerCase()))}
      onChange={onChange}
      handleDelete={handleDelete}
      />
      <Footer number={items.length}/>
   </div>
  );
}

export default App;
