import React,{ Component } from "react";

class CartItem extends Component {
    render(){
        return (
            <div className="card dropdown-item w-100">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={this.props.item.immagine} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.item.nome}</h5>
                            <p className="card-text mb-1">x{this.props.item.quantity}</p>
                            <p className="card-text mb-1"><small className="text-muted">{this.props.item.prezzo}€</small></p>
                            <button onClick={() => this.props.onDeleteCartItem(this.props.item.id)} className="btn btn-outline-danger">Rimuovi</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default CartItem;