/**
 * Created by SDS on 2018-01-03.
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import './Gnb.scss';

const Gnb = () => {

    const activeStyle = {
        // color: 'green'
        backgroundColor: '#666'
        // fontSize: '2rem'
    };
    const homeStyle = {fontWeight: 'bold'};

    return(
        <div className="Gnb-gnb">
            <ul>
                <li><NavLink exact to="/" className="gnb-home" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>Project</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Gnb;