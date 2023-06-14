import React from "react";
import "../Banner/Banner.css";

function Banner() {
  return (
    <>
      <div className=" background text-right p-3">
        <div className="d-flex background-banner flex-column p-3 text-end div-text">
          <h1 className="title-banner p-30">Clube do Livro</h1>
          <h3 className="subtitle-banner p-50">Venha Conhecer</h3>
          <h6 className="p-70">Todas as terças as 20h</h6>
        </div>
      </div>
    </>
  );
}

export default Banner;
