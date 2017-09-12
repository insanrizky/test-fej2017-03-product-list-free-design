import React, {Component} from 'react'

class Header extends Component{
    render(){
        return (
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <a href="#!" className="brand-logo">Brand</a>
                    <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Recents Viewed</a></li>
                        <li><a href="collapsible.html">History</a></li>
                        <li><a href="mobile.html">About</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Recents Viewed</a></li>
                        <li><a href="collapsible.html">History</a></li>
                        <li><a href="mobile.html">About</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header