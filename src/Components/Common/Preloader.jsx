import React from 'react';
import animation from '../../Assets/Images/preloader.gif';

const Preloader = () => {
    return (
        <div>
            <img src={animation} alt={'preloader animation'}></img>
        </div>
    );
};

export default Preloader;
