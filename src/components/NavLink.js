import React from 'react';

import {Link} from 'react-router';

class NavLink extends React.Component{

    render(){
        const isActive = this.context.router.isActive(this.props.to, true);
        const className = isActive ? 'active' : '';

        return(
            <li class={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }

}

NavLink.contextTypes = {
    router: React.PropTypes.object
};

export default NavLink;