import React,{ Component } from "react";

class CardCart extends Component {
    render(){
        return (
            <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-1">
                <div className="card" style={{ textAlign: 'center'}}>
                    <img className="card-img-top" src={this.props.item.immagine} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title mb-1">{this.props.item.nome}</h5>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="m-0">€{this.props.item.prezzo} x</p>
                            <button onClick={() => this.props.onChangeCartItemQuantity(this.props.item, 'sub')} className="btn-circle m-1">
                                -
                            </button>
                            <span className="d-inline-block">{this.props.item.quantity}</span>
                                <button onClick={() => this.props.onChangeCartItemQuantity(this.props.item, 'add')} className="btn-circle m-1">
                                +
                            </button>
                            <p className="m-0"> = €{(this.props.item.prezzo * this.props.item.quantity).toFixed(2)} </p>
                        </div>
                        <button onClick={() => this.props.onDeleteCartItem(this.props.item.id)}  className="btn btn-outline-danger w-100">Rimuovi</button>
                    </div>
                </div>
            </div>
            </>
        );
    }   
}

export default CardCart;