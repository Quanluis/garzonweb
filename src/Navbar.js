import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul className = "nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                </ul>
            </div>
        )
    }
}
export default Navbar;