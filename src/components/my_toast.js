import React,{ Component } from "react";

import Toast from 'react-bootstrap/Toast';

class MyToast extends Component {
    toastHide(toast_id) {
        this.props.onHideToast(toast_id);
    }
    render(){
        return (
            <>
                <Toast show={this.props.toast.status} delay={3000} onClose={() => this.toastHide(this.props.toast.id)} className={this.props.toast.bg} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">{this.props.toast.title}</strong>
                        <small className="text-muted">ora</small>
                    </Toast.Header>
                    <Toast.Body>{this.props.toast.description}</Toast.Body>
                </Toast>
            </>
        );
    }   
}

export default MyToast;