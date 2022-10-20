import React,{ Component } from "react";

class Card extends Component {
    render(){
        return (
            <div className="col-12	col-sm-12 col-md-6 col-lg-4 col-xl-3 p-1">
                <div className="card" style={{ textAlign: 'center', }}>
                    <img className="card-img-top" src={this.props.card.immagine} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title mb-1">{this.props.card.nome}</h5>
                        <p className="card-text mb-1">€{this.props.card.prezzo}</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-outline-secondary m-1 w-25">
                                -
                            </button>
                            <span className="d-inline-block w-25">{this.props.card.quantity}</span>
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-outline-secondary m-1 w-25">
                                +
                            </button>
                        </div>
                        <button onClick={() => this.props.onAddCartItem(this.props.card.id, this.props.card.quantity)} className="btn btn-primary w-100">Aggiungi</button>
                        {/*<button onClick={() => this.props.onDelete(this.props.card.id)}  className="btn btn-outline-danger">Elimina</button>*/}
                    </div>
                </div>
            </div>
        );
    }   
}

export default Card;