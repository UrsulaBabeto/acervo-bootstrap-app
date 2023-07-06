import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "../CardModal/CardModal.css";

function CardModal({ image, title, subtitle, snippet, price, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} fullscreen="xl-down">
        <Modal.Header  closeButton>
          <img
            className="img"
            src={image}            
            height={290}
            alt="..."
          />
           </Modal.Header>
          <Modal.Title className="text-center">
            {title}
            <span className="text-secondary subtitle d-block ">{subtitle}</span>
          </Modal.Title>
       
        <Modal.Body><p>{snippet}</p></Modal.Body>
        <Modal.Footer>
          <span className="price">R${price}</span>
          <span className="id">{id}</span>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
