import React, { Component } from "react";

import Products from "./../components/products";

class Page1 extends Component {
    handleAddCartItem = (card, quantity) => {
        this.props.onAddCartItem(card, quantity);
    }
    render() {
        return (
            <>
                <Products onAddCartItem={this.handleAddCartItem} />
            </>
                    
        );
    }
};

export default Page1;