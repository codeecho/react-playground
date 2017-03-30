require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'

import NavBar from 'components/NavBar';

class Layout extends React.Component{

    render(){

        return (
            <div>
				<NavBar/>
				{this.props.children}
			</div>
        );
    }

}

export default Layout;