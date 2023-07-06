import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import "../Header/Header.css";
import { FaBookOpen, FaBookReader, FaRegBookmark } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className="bg-dark navbar-dark d-flex justify-content-between p-3">
        <Link
          to={"/"}
          className="navbar-brand d-flex justify-baselline"
          href="#"
        >
          <h1 className="pl-20 text-warning nav-text"> Acervo</h1>
          <FaBookOpen className="text-info" />
        </Link>

        <Nav  activeKey="/home">
          <Nav.Item>
            <Nav.Link className="text-warning nav-text fs-20" href="/produtos">
              Produtos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-warning nav-text fs-20" href="/contato">
              Contato
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </>
  );
}

export default Header;
