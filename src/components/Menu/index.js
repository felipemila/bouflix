    import React from 'react';
    import logo from '../../assets/img/Logo.png';
    import './Menu.css';
    import Button from '../Button';

    function Menu() {
        return (
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={logo} alt="Bouflix logo"></img>
                </a>

                <Button as="a" className="ButtonLink" href='/'>
                    Entrar
                </Button>
            </nav>
        );
    }

    export default Menu;