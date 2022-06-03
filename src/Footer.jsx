import React from 'react'

const Footer = ({number}) => {
    const today = new Date();
  return (
    <footer>
        <p style={{display:'flex', justifyContent:'center'}}>{number} &nbsp;{number <=1 ? 'item' : 'items'}</p>
        <p style={{fontSize:'15px'}}>Copyright &copy; Seoyeonjin Choi &nbsp; {today.getFullYear()}</p>

    </footer>
  )
}

export default Footer