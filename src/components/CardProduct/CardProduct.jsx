import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../CardProduct/CardProduct.css";
import CardModal from "../CardModal/CardModal";

function CardProduct(props) {
  const [renderModal, setRenderModal] = useState(false);

  const showModal = () => {
    setRenderModal(!renderModal);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const renderBook = (itemBook) => {
    return (
      <>
        <div className="card-div m-4">
          <div className="card-body text-center ">
            <img src={itemBook.photo} className="img img-card" alt="..." />

            <div className="m-3">
              <h4 className="card-title  rgb(var(--bs-body-color))">
                {itemBook.title}
                <span className="text-secondary subtitle d-block">
                  {itemBook.subtitle}
                </span>
              </h4>

              <p className="card-text text-start">{itemBook.snippets}</p>
              <button href="#" className=" button" onClick={showModal}>
                Comprar
               
              </button>
              {renderModal && (
                  <CardModal
                    image={itemBook.photo}
                    title={itemBook.title}
                    subtitle={itemBook.subtitle}
                    snippet={itemBook.snippets}
                    price={itemBook.price}
                    id={itemBook.id}
                    onClose={toggleModal}
                    className="modal"
                  />
                )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{renderBook(props.book)}</>;
}

export default CardProduct;
