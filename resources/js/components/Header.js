import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/boards">Board</Link></li>
        </ul>
    </div>
);

export default withRouter(Header);
