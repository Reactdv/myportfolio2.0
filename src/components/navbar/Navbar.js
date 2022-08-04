import React from "react"
import "./navbar.css"
import navLogo from "../../assets/logo.svg"


const Navbar =()=>{
  const [isOpen,setIsOpen] = React.useState(false)
  
  
  return (
    
    <div className="nav__container">
      <div className="nav-logo__container">
        <img src={navLogo} />
      </div>
      <div className='nav-links__container'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gp3">What is GP3</a></li>
          <li><a href="#open-ai"> Open Ai</a></li>
          <li><a href="#case">Case Study</a></li>
          <li><a href="#library">Library</a></li>
        </ul>
      </div>
      <div className="nav-auth__container">
        <button className="btn__signin">
          Sign in
        </button>
        <button className="btn__signup">
         Sign up
        </button>
      </div>
      <div 
      id={isOpen? "nav-menu-animate":null}
      onClick={()=>setIsOpen(open=>!open)}
      className="nav-menu__container">
        <div />
        <div />
        <div />
      </div>
     {
       isOpen &&
     
     <div className="nav-modal__container">
      <div className='nav-modal-links__container'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gp3">What is GP3 </a></li>
          <li><a href="#open-ai"> Open Ai</a></li>
          <li><a href="#case">Case Study</a></li>
          <li><a href="#library">Library</a></li>
          <li><a href="#signin">Signin</a></li>
        </ul>
      </div>
      <button className="btn__signup">
          Sign up
      </button>
      </div>
     }
    </div>
    
    )
}

export default Navbar;