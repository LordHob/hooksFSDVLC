
import React from 'react';

import './Boton.css';

import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    const history = useHistory();

    const llevame = () => {
        history.push(props.url);
    }

    return (
        <div className="designBoton" onClick={()=>llevame()}>{props.destino}</div>
    )
};

export default Boton;