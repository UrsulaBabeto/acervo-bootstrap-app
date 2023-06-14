import React from "react";

import "../CardProduct/CardProduct.css";


function CardProduct(props) {
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
              <a href="#" className=" button  ">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{renderBook(props.book)}</>;
}

export default CardProduct;
