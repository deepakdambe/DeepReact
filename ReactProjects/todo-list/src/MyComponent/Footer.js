import React from 'react'

export const Footer = () => {

  let footerStyle = {
    position: "absolute",
    top: "91vh",
    width: "100%",
    border: "5px solid red"
  }

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </footer>
  )
}
