/**
 * Created by SDS on 2018-01-03.
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import './Gnb.scss';

const Gnb = () => {

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return(
        <div className="Gnb-gnb">
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>Project</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Gnb;