import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix Show!"/> 
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>  
    );
}
    
export default Menu;