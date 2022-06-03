import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const LineItem = ({item, onChange, handleDelete}) => {
  return (
    <li className='item'>
    <input 
    type="checkbox"
    checked={item.checked}
    onChange={()=>onChange(item.id)}
    />
    <label
    style={(item.checked)?{textDecoration: 'line-through'}: null}
    onDoubleClick={()=>onChange(item.id)}
    >{item.item}</label>
    <RiDeleteBin6Line 
    onClick={()=>handleDelete(item.id)}
    role="button" 
    tabIndex={0}
    />
</li>)
}

export default LineItem