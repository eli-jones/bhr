import './header.css';
import logo from '../../images/bhr-logo.png';
import { Link } from 'react-router-dom';

import { Nav } from '../nav/nav';

function Header() {
    
    return (
        <div class='header'>
            <Link to='/'><img src={logo} /></Link>
            <Nav />
        </div>
    )
    
}; 

export { Header };