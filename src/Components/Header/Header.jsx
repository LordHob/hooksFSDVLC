
import React from 'react';

import './Header.css';
import Boton from '../Boton/Boton';

const Header = () => {

    return(
        <div className="designHeader">
            <Boton destino="Home" url="/"/>
            <Boton destino="Login" url="/login"/>
            <Boton destino="Registro" url="/register"/>
        </div>
    )

};

export default Header;