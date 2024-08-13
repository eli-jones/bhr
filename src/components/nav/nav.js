import './nav.css';
import { Link } from 'react-router-dom';

import { menuItemsData } from '../menuItems/menuItemsData';
import { MenuItems } from '../menuItems/menuItems'

function Nav() {
    
    return (
        <nav className='desktop-nav'>
            <ul>
                {menuItemsData.map((menu, index) => {
                    return (
                        <MenuItems items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    )
}

export { Nav };