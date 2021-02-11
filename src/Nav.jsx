import React from 'react';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showComponent: false, clicked: false, };
        this.Btn = this.Btn.bind(this);
    }
    Btn() {
        if( this.state.clicked === false) {
            this.setState({
                clicked: true,
            });
        } else {
            this.setState({
                clicked: false,
            });
        }
    }
    render() {
        return(
            <div id="navDiv">
                {this.state.clicked ?
                null :
                    <button onClick={this.Btn} className="arrowBtn">◐</button>
                }
                {this.state.clicked ? 
                    <nav>
                        <NavLink exact to="/"><button className="Navbutton">Home</button></NavLink>
                        <NavLink to="/projects"><button className="Navbutton">Projects</button></NavLink>
                        <NavLink to="/contact"><button className="Navbutton">Contact</button></NavLink>
                        <button onClick={this.Btn} className="arrowBtn">◑</button>
                    </nav> : null
                }
           </div>
        )
    }
}