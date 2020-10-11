import React from 'react';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {
    render() {
        return(
           <nav>
               <NavLink exact to="/">Home</NavLink>
               <NavLink to="/contact">Contact</NavLink>
               <NavLink to="/about">About</NavLink>
           </nav>
        )
    }
}