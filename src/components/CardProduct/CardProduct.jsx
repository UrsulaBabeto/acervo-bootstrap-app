import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";

import { ModalContext } from "../../contexts/ModalContext";
import "../CardProduct/CardProduct.css";

function CardProduct(props) {
  const { setShowModal, setBook } = useContext(ModalContext);

  const showModal = () => {
    setBook(props.book);
    setShowModal(true);
  };

  const renderBook = (itemBook) => {
    return (
      <>
        <Card className="col-5 mb-5 ">
          <Card.Img
            className="img"
            variant="top"
            border="info"
            src={itemBook.photo}
            width={400}
            height={290}
          />
          <Card.Body>
            <Card.Title className="text-center">
              {itemBook.title}
              <span className="text-secondary subtitle d-block">
                {itemBook.subtitle}
              </span>
            </Card.Title>

            <span className="id">{itemBook.id}</span>
            <Button
              variant="outline-info"
              className=" button"
              onClick={showModal}
            >
              Comprar
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  };

  return <>{renderBook(props.book)}</>;
}

export default CardProduct;
