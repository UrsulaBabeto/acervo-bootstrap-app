import React from "react";
import "../Header/Header.css";
import { FaBookOpen, FaBookReader, FaRegBookmark } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className="header navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid ">
          <a className="navbar-brand d-flex justify-baselline" href="#">
          <h1 className="pl-20 text-warning nav-text"> Acervo</h1><FaBookOpen className="text-info"/>
          </a>
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  p-30 fs-20 navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-warning nav-text" href="#">
                Titulos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning nav-text" href="#">
                Autores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning nav-text" href="#">
                Gênero
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
