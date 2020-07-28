    import React from 'react';
    import { Link } from 'react-router-dom';
    import logo from '../../assets/img/Logo.png';
    import './Menu.css';
    import Button from '../Button';

    function Menu() {
        return (
            <nav className="Menu">
                <Link to="/">
                    <img className="Logo" src={logo} alt="Bouflix logo"></img>
                </Link>

                <Button as={Link} className="ButtonLink" to='/cadastro/video'>
                    Adicionar
                </Button>
            </nav>
        );
    }

    export default Menu;