import React from 'react';

import NavLink from './NavLink';

class NavBar extends React.Component{

    render(){
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Todo List</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="help">Help</NavLink>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Settings</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;