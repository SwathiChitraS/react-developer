import React from 'react';

import Styles from './Logo.module.css';
import Logo from '../../assets/Images/logo.png'

const logo = (props) => (
    <div className={Styles.Logo} style={{width : props.width, height : props.height}}>
        <img src={Logo} alt="Logo"></img>
    </div>
);

export default logo;