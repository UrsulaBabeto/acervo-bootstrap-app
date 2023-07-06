import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../CardModal/CardModal.css";

function CardModal({ image, title, subtitle, snippet, price, id }) {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setClose(true);
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {!close && (
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <div>
              <img
                className="img img-card col-sm-12"
                src={image}
                width={490}
                height={290}
                alt="..."
              />
            </div>
            <Modal.Title>
              {title}
              <span className="text-secondary subtitle d-block">
                {subtitle}
              </span>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> {snippet}</Modal.Body>
          <span className="price">R${price}</span>
          <span className="id">{id}</span>

          <button className="button text-light w-25" onClick={closeModal}>
            x
          </button>
        </Modal>
      )}
    </>
  );
}

CardModal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  snippet: PropTypes.string,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardModal;
