import React, { Component } from "react";

class Filter extends Component {
    prices = cards => {
        const prices = [];
        this.props.cards.forEach(card => {
            if (!prices.includes(card.prezzo)){
                prices.push(card.prezzo);
            }
            
        });
        return prices;
    }
    handleChange = (event) => {
        this.props.onChangePrice(event.target.value);
    }
    render() {
        return (
            <div className="bg-secondary mt-4 mb-3 p-2 rounded">
                <div className="text-white">
                    <i className="fa-solid fa-filter "></i>
                    <span className="d-inline-block mx-2">Filtro</span>
                </div>
                <div className="row">
                    <div className="col-12	col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="form-group">
                            <label>Prezzo</label>
                            <select onChange={this.handleChange} className="form-select" aria-label="Default select example">
                                <option value="">Tutti</option>
                                {this.prices(this.props.cards).map((price, index) => (
                                    <option value={price} key={index}>{price}€</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;