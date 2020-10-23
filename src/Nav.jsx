import React from 'react';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {
    render() {
        return(
            <div id="navDiv">
                <nav>
                    <NavLink exact to="/"><button>Home</button></NavLink>
                    <NavLink to="/projects"><button>Projects</button></NavLink>
                    <NavLink to="/contact"><button>Contact</button></NavLink>
                </nav>
           </div>
        )
    }
}