import React,{ Component } from "react";

import Filter from "./../components/filter";
import Card from "./../components/card";

/*IMMAGINI*/
import california from "./../images/california.png";
import dragon from "./../images/dragon.png";
import dynamite from "./../images/dynamite.png";
import philadelphia from "./../images/philadelphia.png";
import rainbow from "./../images/rainbow.png";
import shrimp from "./../images/shrimp.png";

class Products extends Component {
    state = {
        cards_main: [
            { id: 0, nome: 'California Roll', immagine: california, prezzo: 1.99, quantity: 1, },
            { id: 1, nome: 'Dragon Roll', immagine: dragon, prezzo: 2.99, quantity: 1, },
            { id: 2, nome: 'Dynamite Roll', immagine: dynamite, prezzo: 3.99, quantity: 1, },
            { id: 3, nome: 'Philadelphia Roll', immagine: philadelphia, prezzo: 1.99, quantity: 1, },
            { id: 4, nome: 'Rainbow Roll', immagine: rainbow, prezzo: 5.99, quantity: 1, },
            { id: 5, nome: 'Shrimp Roll', immagine: shrimp, prezzo: 3.99, quantity: 1, },
        ],
        cards: [
            { id: 0, nome: 'California Roll', immagine: california, prezzo: 1.99, quantity: 1, },
            { id: 1, nome: 'Dragon Roll', immagine: dragon, prezzo: 2.99, quantity: 1, },
            { id: 2, nome: 'Dynamite Roll', immagine: dynamite, prezzo: 3.99, quantity: 1, },
            { id: 3, nome: 'Philadelphia Roll', immagine: philadelphia, prezzo: 1.99, quantity: 1, },
            { id: 4, nome: 'Rainbow Roll', immagine: rainbow, prezzo: 5.99, quantity: 1, },
            { id: 5, nome: 'Shrimp Roll', immagine: shrimp, prezzo: 3.99, quantity: 1, },
        ],
    }
    handleDelete = cardId => {
        const cards = this.state.cards.filter(card => card.id !== cardId);
        this.setState({ cards });
    }
    handleIncrement = card => {
        const cards = [...this.state.cards];
        const index = cards.indexOf(card);
        cards[index].quantity++;
        this.setState({ cards });
    }
    handleDecrement = card => {
        const cards = [...this.state.cards];
        const index = cards.indexOf(card);
        if (cards[index].quantity > 1) {
            cards[index].quantity--;
        }
        this.setState({ cards });
    }
    handleChangePrice = (price) => {
        var cards = [];
        if (price) {
            this.state.cards_main.forEach(card => {
                if (parseInt(card.prezzo) === parseInt(price)) {
                    cards.push(card);
                }
            });
        } else {
            cards = this.state.cards_main;
        }

        this.setState({ cards });
    }
    handleAddCartItem = (cardId,quantity) =>{
        //per fare perdere il riferimento sia all'array che agli oggetti da esso contenuti
        //alternative array2 = structuredClone(array1);
        let cards = JSON.parse(JSON.stringify(this.state.cards_main));
        let card = JSON.parse(JSON.stringify(cards[cardId]));
        this.props.onAddCartItem(card, quantity);
        this.setState({ cards });
    }
    render() {
        return (
            /*<> </> per utilizzare nel render codice JSX*/
            /* */
            <>
                <div className="container mt-3 py-5 position-relative">
                    <Filter 
                        cards={this.state.cards_main}
                        onChangePrice={this.handleChangePrice} 
                    />
                    <div className="px-2">
                        <div className="row">
                            {this.state.cards.map(card => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    onAddCartItem={this.handleAddCartItem}
                                    onDelete={this.handleDelete}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Products;
