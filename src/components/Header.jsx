import React from 'react'
import "./Header.css"

const ulStyle = {
    listStyleType : "none", 
    display : "flex", 
    justifyContent : "center",
    backgroundColor: "#212529",
    height : "68px",
    alignItems : "center"
}
function Header() {
  return (
    <div>
        <ul style={ulStyle}>
            <li>
                <a href="About">ABOUT US</a>
            </li>
            <li>
                <a href="For_You">FOR YOU</a>
            </li>
            <li>
                <a href="Services">SERVICES</a>
            </li>
            <li>
                <a href="Blog">BLOG</a>
            </li>
            <li>
                <a href="Vlog">VLOG</a>
            </li>
            <li>
                <a href="Contact">CONTACT</a>
            </li>
           
        </ul>
    </div>
  )
}

export default Header;