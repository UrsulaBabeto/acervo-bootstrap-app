import React, { useContext } from "react";
import { Modal } from "react-bootstrap";

import "../CardModal/CardModal.css";
import { ModalContext } from "../../contexts/ModalContext";

function CardModal() {
  const { showModal, setShowModal, book, setBook } = useContext(ModalContext);

  const handleShow = () => {
    setShowModal(false);
    setBook({});
  };
  return (
    <>
      <Modal show={true} fullscreen="xl-down">
        <Modal.Header closeButton onClick={handleShow}>
          <img className="img" src={book.photo} height={290} alt="..." />
        </Modal.Header>
        <Modal.Title className="text-center">
          {book.title}
          <span className="text-secondary subtitle d-block ">{book.subtitle}</span>
        </Modal.Title>

        <Modal.Body>
          <p>{book.snippets}</p> <span className="price">R${book.price}</span>
        </Modal.Body>

        <Modal.Footer>
          <span className="id">{book.id}</span>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
