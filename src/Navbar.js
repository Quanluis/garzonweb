import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul className = "nav">
                    <li><a href="www.google.com">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar;