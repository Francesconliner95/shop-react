import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import CardCart from "./../components/card_cart";

class Page2 extends Component {
    handleChangeCartItemQuantity = (cartItem, add_sub) => {
        this.props.onChangeCartItemQuantity(cartItem, add_sub);
    }
    handleDeleteCartItem = (cartId) => {
        this.props.onDeleteCartItem(cartId);
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center mt-5 py-5">Carrello</h1>
                <div className="px-2">
                    <div className="row">
                        {this.props.cart.map(item => (
                            <CardCart
                                key={item.id}
                                item={item}
                                onDeleteCartItem={this.handleDeleteCartItem}
                                onChangeCartItemQuantity={this.handleChangeCartItemQuantity}
                            />
                        ))}
                    </div>
                </div>
                {
                    this.props.cart.length>0?
                        <div className="text-center py-3">
                            <Link to="/success" className="btn btn-warning">Procedi all'acquisto</Link>
                            <Outlet />
                        </div>
                        :
                        <p>Il tuo carrello è vuoto</p>
                }
                
            </div>
        )
    }
};

export default Page2;