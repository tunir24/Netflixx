import React from 'react'
import './App.scss';
import logo from "./logo (2).png";
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im";
function Header() {
  return (
    <>
    <div className="header">
    <img src={logo} alt="" />
    <div className="new">
    <div className="nav">
        <Link to={"/tvshowes"}>TV Showes</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/recent"}>Recently Added</Link>
        <Link to={"/list"}>My List</Link>
    </div>
    <ImSearch/>
    </div>
    </div>
    </>
  )
}

export default Header;