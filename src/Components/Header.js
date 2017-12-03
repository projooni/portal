/**
 * Created by projo on 2017-12-02.
 */

import React from 'react';

class Header extends React.Component {

    render(){

        return(
            <div>
                <h1>{this.props.title}</h1>
                <hr/>
            </div>
        );

    }
}

export default Header;