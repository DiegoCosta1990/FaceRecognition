import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img className= 'pa2' src={Brain} alt= 'brain'></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;