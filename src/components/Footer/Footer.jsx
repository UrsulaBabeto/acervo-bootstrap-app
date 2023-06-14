import React from "react";
import "../Footer/Footer.css";
import {
  FaFacebookSquare,
  FaInstagram, 
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="d-flex flex-row justify-content-evenly bg-info pb-3 footer mt-5">
        <div className="d-flex flex-column mt-5">
          <h2>Contato</h2>
          <ul className="contato">
            <li className="contato-li">Política de Vendas</li>
            <li className="contato-li">Trocas e Privacidade</li>
            <li className="contato-li">Termos e Condições</li>
            <li className="contato-li">Entre em Contato</li>
          </ul>
        </div>

        <div className="d-flex flex-column mt-5">
          <h2>Institucional</h2>
          <ul className="contato">
            <li className="contato-li">Quem Somos</li>
            <li className="contato-li">Nossas Lojas</li>
            <li className="contato-li">Trabalhe Conosco</li>
            <li className="contato-li">Seja um parceiro</li>
          </ul>
        </div>
        <div>
          <ul className="contato d-flex flex-column gap-4 m-5">
            <li className="icons">
              <FaInstagram className="icon-li"></FaInstagram>
            </li>
            <li className="icons">
              <FaFacebookSquare className="icon-li"></FaFacebookSquare>
            </li>
          </ul>
        </div>
      </div>
     {/*  <div className="container bg-black mw-100">
        <p className="text-warning">• View Galery •</p>
      </div> */}
    </>
  );
}

export default Footer;
