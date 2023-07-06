
import { FaSearchengin } from "react-icons/fa";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";

import hp from "../../assets/hp.jpg";
import LOTR from "../../assets/LOTR.jpg";
import pridePrejudice from "../../assets/pridePrejudice.jpg";
import madHatter from "../../assets/madHatter.jpg";

import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";

function MainPage() {
  const books = [
    {
      photo: hp,
      title: "Harry Potter",
      subtitle: "e as Reliquias da Morte",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:39,
        id:34
    },
    {
      photo: LOTR,
      title: "O Senhor dos Anéis",
      subtitle: "Os anéis do Poder",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:79,
        id:39
    },
    {
      photo: pridePrejudice,
      title: "Orgulho e ",
      subtitle: "  Preconceito  ",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:88,
        id:32
    },
    {
      photo: madHatter,
      title: "Alice",
      subtitle: "no país das Maravilhas",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:76,
        id:3
    },
  ];

  const { setBanner } = useContext(BannerContext);
   
  useEffect(() => {
      setBanner({
        title: "Clube do Livro",
        subtitle: "Venha Conhecer",
        openingHours: "Todas as terças as 20h"
      });
    }, []);

  return (
    <>
      <Header />
      <Banner />
      <div className="d-flex m-5 flex-wrap ">
        {books.map((item) => (
          <CardProduct key={item.title} book={item} />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <a className="lista-livros" href="#">
          <FaSearchengin />
          Busca no Acervo
        </a>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
