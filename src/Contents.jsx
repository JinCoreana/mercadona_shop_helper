import React from 'react'
import ItemList from './ItemList'


const Contents = ({items, onChange, handleDelete}) => {


    return (

    <div>
    {items.length > 0 ?
        <ItemList
        items={items}
        onChange={onChange}
        handleDelete={handleDelete}
        />
        : <p style={{marginTop:'5rem', marginBottom:'5rem', display:'flex', justifyContent:'center'}}>Your shopping list is empty</p> }
    </div>
  )
}

export default Contents