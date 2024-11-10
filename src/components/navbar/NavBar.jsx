import React from "react";
import "./Navbar.css";
import { IoAddCircleSharp } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <h1>Todo App</h1>
        <button className="add-btn" onClick={()=>navigate("/add-notes")}><span className="btn-name">Create Notes</span> <span className="btn-icon"> <IoAddCircleSharp /></span>
        
        </button>
      </nav>
    </>
  );
}

export default NavBar;
