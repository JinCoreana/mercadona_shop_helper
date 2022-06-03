import React from 'react'
import LineItem from './LineItem'


const ItemList = ( {items, onChange, handleDelete}) => {
  return (
<ul>
            {items.map((item)=>
            <LineItem 
            item={item}
            key={item.id}
            onChange={onChange}
            handleDelete={handleDelete}/>  
            )}
        </ul>
  )
}

export default ItemList