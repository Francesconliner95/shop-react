import React,{Component} from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Success from "./pages/success";
import NoPage from "./pages/NoPage";

import ToastContainer from 'react-bootstrap/ToastContainer';

import Navbar from "./components/navbar";
import MyToast from "./components/my_toast";


class App extends Component {
    state = {
        cart: [],
        toast: false,
        toasts: [],
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    handleAddCartItem = (card, quantity) => {
        var cart = this.state.cart;
        var item_exist = false;
        if (cart.length > 0) {
            cart.forEach((item, i) => {
                if (item.id === parseInt(card.id)) {
                    item_exist = true;
                    item.quantity = item.quantity + quantity;
                }
            });
        }
        if (!item_exist) {
            var new_item = card;
            new_item.quantity = quantity;
            cart.push(new_item);
        }
        this.setState({ cart });
        this.addToast('Prodotto aggiunto', 'Hai aggiunto ' + card.nome + ' al carrello', 'bg-success');
    }
    handleDeleteCartItem = cartId => {
        var cart = this.state.cart;
        cart.forEach((item, i) => {
            if (item.id === parseInt(cartId)) {
                this.addToast('Prodotto rimosso', 'Hai rimosso ' + item.nome + ' dal carrello', 'bg-danger');
                cart.splice(i, 1);
            }
        });
        this.setState({ cart });
        console.log('qua');
    }
    handleChangeCartItemQuantity = (cartItem, add_sub) => {

        const cart = [...this.state.cart];
        const index = cart.indexOf(cartItem);
        if (add_sub==='add'){
            cart[index].quantity++;
        }else{
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
        }
        this.setState({ cart });
    }
    addToast(title,description,background){
        var toasts = this.state.toasts;
        var toast = { id: toasts.length, status: true, title: title, description: description, bg: background};
        toasts.push(toast);
        this.setState({ toasts });
    }
    handleHideToast = (toast_id) => {
        var toasts = this.state.toasts;
        toasts[toast_id].status = false;
        this.setState({ toasts });
    }
    render(){
        return (
        /*<> </> per utilizzare nel render codice JSX*/
            <>
                <ToastContainer className=".toast-container">
                    {this.state.toasts.map(toast => (
                        <MyToast 
                            key={toast.id}  
                            toast={toast} 
                            onHideToast={this.handleHideToast} 
                        />
                    ))}
                </ToastContainer>
                <BrowserRouter>
                    <Navbar
                        cart = {this.state.cart}
                        onDeleteCartItem={this.handleDeleteCartItem}
                    />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/page1" element={<Page1 onAddCartItem={this.handleAddCartItem} />}  />
                        <Route path="/page2" 
                            element={
                                <Page2 cart={this.state.cart} 
                                        onChangeCartItemQuantity={this.handleChangeCartItemQuantity}
                                        onDeleteCartItem={this.handleDeleteCartItem} 
                                />
                            } 
                        />
                        <Route path="/success" element={<Success />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
