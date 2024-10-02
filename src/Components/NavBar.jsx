import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    
  return (
    <div id ="MainNav">
        <img src="https://lh6.googleusercontent.com/proxy/4iKlBzGUXnokdmtXyTYQPXMZQDYcf1DlAnCSwre9Gq6TSrHb86kngArFEF9z45cOIFf3lrhflLmtHIc3g5IdgtRpxfyvrxcLkQOyRsBDH7xERAOQ" alt="" />
      
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Courses"}>Courses</Link>
            </li>
            <li>
                <Link to={"/Practice"}>Practice</Link>
            </li>
            <li>
                <Link to={"/Usid"}>Usid</Link>
            </li>
        </ul>
    </div>
  )
}
