import React from "react";
import {Link} from "react-router-dom";

class Header1 extends React.Component {

    render() {
        return (
            <div>
                <Link to="/">Redux Auth</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/feature">Feature</Link>
                <Link to="/signout">Signout</Link>
            </div>
        );
    }

}

export default Header1;
