import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CartModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Added to your cart!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="w-100 d-flex">
          <div className="col-6">
            <img className="img-fluid" src={props.productinfo.imageUrl} />
          </div>
          <div className="col-6">
            <h5 className="mt-4">{props.productinfo.name} Snowboard</h5>
            <h5 className="fw-light">Size: {props.size}</h5>
            <h5 className="fw-light">Qty: {props.qty}</h5>
            <h5 className="fw-light">Price: ${props.productinfo.price / 100}</h5>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button as="a" className="w-100 cart-btn border-0" href="#cart" onClick={props.onHide}>Checkout Now</Button>
        <Button as="a" className="w-100 cont-shop-btn" href="#products" onClick={props.onHide}>Continue Shopping</Button>
      </Modal.Footer>
    </Modal>
  );
}
