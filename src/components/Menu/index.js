import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from '../ButtonLink';
import Button from '../button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix Show!"/> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/videos">
                Novo video
            </Button>
        </nav>  
    );
}
    
export default Menu;