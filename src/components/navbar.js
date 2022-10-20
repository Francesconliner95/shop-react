import React, { Component } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom";
import Layout from "./layout";
import CartItem from "./cart_item";


class Navbar extends Component {

    state = {
        dropdown_menu: false,
    }
    dropdownToggle = () => {
        var dropdown_menu = !this.state.dropdown_menu;
        this.setState({ dropdown_menu });
    }
    componentDidMount() {
        //non mi chiude il dropdown menu se clicco all'interno
        /* document.querySelector(".dropdown-menu").onclick = function (e) { 
            e.stopPropagation();
        }; */
    }
    render () {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark py-3">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Shop</span>
                    <Layout />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle position-relative" type="button" /*data-bs-toggle="dropdown"*/ aria-expanded="false" onClick={this.dropdownToggle}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            {this.props.cart.length>0 ?
                                <span className="badge position-absolute top-0 start-100 translate-middle bg-warning">{this.props.cart.length}</span>
                                :''
                            }
                        </button>
                        <ul className={this.state.dropdown_menu ? 'dropdown-menu dropdown-menu-end show' :'dropdown-menu dropdown-menu-end'}>
                            {
                            this.props.cart.length>0?
                            <div>
                                {this.props.cart.map((item, index) => (
                                        <CartItem
                                            key={index}
                                            item={item}
                                            onDeleteCartItem={() => this.props.onDeleteCartItem(item.id)}
                                        />
                                        ))}
                                <div className="text-center mt-2">
                                    < Link to="/page2" className="btn btn-warning">Vai al carrello</Link>
                                    <Outlet />
                                </div>
                            </div>
                            : <p className="text-center my-2">Il carrello è vuoto</p>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;