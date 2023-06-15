/* Deverá ser criado um componente de Card utilizando React no qual deve ser passado uma propriedade
 contendo o objeto do produto, o qual deve conter propriedades como nome (string obrigatório),
  valor (number obrigatório), descricão (string obrigatório), caracteristicas (array de string contendo no
     mínimo uma como obrigatória) e o id (number obrigatório).
Nesse exercício deve se usar a lib prop-types para validar o recebimento dessa prop que será enviada.
Sejam criativos podem utilizar uma outra paleta de cores no projeto assim como criar o próprio nome da empresa de vocês. */

import React from "react";
import { PropTypes } from "prop-types";

import "../CardModal/CardModal.css";

function CardModal({ image, title, subtitle, snippet, price, id }) {
  return (
    <>
      <div className="card-div m-4">
        <div className="card-body text-center ">
          <img className="img img-card" width={490} height={290} alt="..." />
          {image}
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
            <a href="#" className=" button  ">
              Comprar
            </a>
          </div>
        </div>
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
/* 
<section class="bikes">
                        

                        <div class="images-products">
                            <img class="img.bike" src="./assets/images/magic.jpg" alt="">
                            <div class="price">R$ 2499</div>
                        </div>
        
                    </section> */
