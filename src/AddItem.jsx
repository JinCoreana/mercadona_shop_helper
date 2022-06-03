import React, { useRef } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
const AddItem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
        
        autoFocus
        ref={inputRef} 
        type='text'
        value={newItem}
        required
        placeholder='Add new item'
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button 
        type='submit' 
        onClick={()=>inputRef.current.focus()}
        aria-label='Add Item' >  
        <IoMdAddCircleOutline 
        />
        </button>
    </form>  )
}

export default AddItem