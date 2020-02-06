import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

// if we have a variable in React, think state
constructor(props) {
    // register Nav as one of the React Components on the page.
    super(props);
    // this.state always an object
    this.state = {
        isOpen: false
    }
    // manually binding as an alternative to using arrow function
    // this._toggleMenu = this._toggleMenu.bind(this);
}

    render() {
        return (
                this.state.isOpen ?
                <React.Fragment>
                    <a onClick={this._toggleMenu}>🥞</a>
                    <ul>
                        {
                            this.props.links.map((item, index) => {
                            return <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        })
                    }
            </ul>
                </React.Fragment>
            :
            <a onClick={this._toggleMenu}>🍔</a>

            
         
        );
    }
    
    // Arrow function variable never ever loses the value of `this` keyword
    // interview questions - need class when when not?
    _toggleMenu = () => {
        // method you get when you use constructors
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled')
        });
    }
  
}



export default Nav;