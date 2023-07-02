import './FAQPage.css'

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'


import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

function FAQPage() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Header />
      <Banner />
      <Search />
      

     <div className="d-flex flex-column ">
     <a className="faq-link" onClick={() => setOpen(!open)}>Como funciona a Política de Vendas? <FontAwesomeIcon icon={faChevronDown} /></a>

{open && (
  <div id="collapse-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio.
  </div>
)}

<a className="faq-link" onClick={() => setOpen1(!open1)}>
  {" "}
  Qual é a Política de Privacidade e Segurança da Acervo? <FontAwesomeIcon icon={faChevronDown} />
</a>

{open1 && (
  <div id="collapse-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio.
  </div>
)}

<a className="faq-link" onClick={() => setOpen2(!open2)}> Qual é a Política de Cookies? <FontAwesomeIcon icon={faChevronDown} /></a>

{open2 && (
  <div id="collapse-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio.
  </div>
)}
     </div>

      <Footer />
    </>
  );
}

export default FAQPage;
