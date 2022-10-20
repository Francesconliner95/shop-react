import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class Success extends Component {
    render(){
        return (
            <div className="container">
                <h1 className="text-center mt-5 py-5">Acquisto riuscito</h1>
                <div className="text-center">
                    <Link to="/" className="btn btn-primary">Torna alla home</Link>
                    <Outlet />
                </div>
            </div>
        )
    }
};

export default Success;