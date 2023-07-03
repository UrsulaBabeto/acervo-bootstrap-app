
import React from "react";
import { PropTypes } from "prop-types";

import "../CardModal/CardModal.css";

function CardModal({ image, title, subtitle, snippet, price, id}) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content d-flex flex-column">
          <img
            className="img img-card"
            src={image}
            width={490}
            height={290}
            alt="..."
          />

          <div className="m-3">
            <h4
              className="card-title  rgb(var(--bs-body-color))"
              title="Harry Potter"
            >
              {title}
              <span className="text-secondary subtitle d-block">
                {subtitle}
              </span>
            </h4>

            <p className="card-text text-start">{snippet}</p>
            <span className="price">R${price}</span>
            <span className="id">{id}</span>
          </div>
        </div>
          <button className="button text-light w-25" >x</button>
      </div>
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
