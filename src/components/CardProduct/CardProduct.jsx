import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import "../CardProduct/CardProduct.css";
import CardModal from "../CardModal/CardModal";

function CardProduct(props) {
  const [renderModal, setRenderModal] = useState(false);

  const showModal = () => {
    setRenderModal(!renderModal);
  };

  const renderBook = (itemBook) => {
    return (
      <>
        <Card className="col-5 ">
          <Card.Img
            className="img"
            variant="top"
            border="info"
            src={itemBook.photo}
            width={490}
            height={290}
          />
          <Card.Body>
            <Card.Title>
              {" "}
              {itemBook.title}
              <span className="text-secondary subtitle d-block">
                {itemBook.subtitle}
              </span>
            </Card.Title>
            <Card.Text>{itemBook.snippet}</Card.Text>
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

        {renderModal && (
          <CardModal
            image={itemBook.photo}
            title={itemBook.title}
            subtitle={itemBook.subtitle}
            snippet={itemBook.snippets}
            price={itemBook.price}
            id={itemBook.id}
          />
        )}
        <div></div>
      </>
    );
  };

  return <>{renderBook(props.book)}</>;
}

export default CardProduct;
