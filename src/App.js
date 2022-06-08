import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL ='http://localhost:3500/items'
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
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
useEffect(()=>{
const fetchItems=async()=>{
  try{
    const response = await fetch(API_URL)
    if(!response.ok) throw Error('Did not receive expected data')
    const listItems = await response.json()
    console.log(listItems)
    setItems(listItems)
    setFetchError(null)
  }
  catch (err){
    setFetchError(err.message)
  }
  finally{
    setIsLoading(false)
  }
}
(async ()=> await fetchItems())()
},[])


const addItem=async(item)=>{
 const id = items.length? items[items.length-1].id+1 : 1
 const newItem = {id, checked:false, item}
 const listItems= [...items, newItem]
 setItems(listItems)

const postOptions={
method:'POST',
headers:{
  'Content-Type':'application/json'
},
body: JSON.stringify(newItem)
}
const result= await apiRequest(API_URL, postOptions)
if(result) setFetchError(result)
}

const handleSubmit= (e)=>{
  e.preventDefault()
  if(!newItem) return
  addItem(newItem);
  setNewItem('');
}

const onChange = async(id)=> {
  const updatedList = items.map((item)=> item.id === id? {...item,
checked: !item.checked}: item)
  setItems(updatedList)
//이렇게 저장해놓으면 다시 로드했을때 마지막으로 저장된 값 불러와짐.

const clickedItem = updatedList.filter((item)=> item.id===id)
console.log(clickedItem[0].checked)
const patchOptions={
  method:'PATCH',
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({checked: clickedItem[0].checked})
}
const reqUrl = `${API_URL}/${id}`
const result= await apiRequest(reqUrl, patchOptions)
if(result) setFetchError(result)
}

const handleDelete= async(id) =>{  
  const updatedList = items.filter((item)=> item.id !== id)
   setItems(updatedList)
   const deleteOptions={
     method:'DELETE' }
     const reqUrl = `${API_URL}/${id}`
     const result = await apiRequest(reqUrl, deleteOptions)
     if(result) setFetchError(result)
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
     <main>
       {isLoading && <p>Loading Items...</p>}
       {fetchError && <p style={{color:'red'}}>{`Error:${fetchError}`}</p>}
      {!fetchError && !isLoading && <Contents 
      items={items.filter(items => ((items.item).toLowerCase()).includes
      (search.toLowerCase()))}
      onChange={onChange}
      handleDelete={handleDelete}
      />}
      </main>
      <Footer number={items.length}/>
   </div>
  );
}

export default App;
