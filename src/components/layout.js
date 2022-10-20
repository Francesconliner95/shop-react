import React, { Component } from "react"; 
import { Outlet, Link } from "react-router-dom";

class Layout extends Component {
    render(){
        return (
            <>
                <nav>
                    <ul className="d-flex m-0">
                        <li className="d-inline-block px-2 bg-transparent">
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li className="d-inline-block px-2 bg-transparent">
                            <Link to={{ pathname: "/page1", /*state: data*/ }} className="text-white">Prodotti</Link>
                        </li>
                        <li className="d-inline-block px-2 bg-transparent">
                            <Link to="/page2" className="text-white">Carrello</Link>
                        </li>
                    </ul> 
                </nav>
                <Outlet />
            </>
        )
    }
        
};

export default Layout;