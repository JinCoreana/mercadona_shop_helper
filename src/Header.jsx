import React from 'react'

const Header = ({title}) => {
  // const headerStyle ={  backgroundColor:'blue',
  // color:'white',
  // }
  return (
    <header>
    <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps={
  title:'Default Props check'
}
export default Header