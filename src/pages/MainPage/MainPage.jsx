
import { FaSearchengin } from "react-icons/fa";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import CardModal from "../../components/CardModal/CardModal"

import hp from "../../assets/hp.jpg";
import LOTR from "../../assets/LOTR.jpg";
import pridePrejudice from "../../assets/pridePrejudice.jpg";
import madHatter from "../../assets/madHatter.jpg";

function MainPage() {
  const books = [
    {
      photo: hp,
      title: "Harry Potter",
      subtitle: "e as Reliquias da Morte",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      photo: LOTR,
      title: "O Senhor dos Anéis",
      subtitle: "Os anéis do Poder",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      photo: pridePrejudice,
      title: "Orgulho e ",
      subtitle: "  Preconceito  ",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      photo: madHatter,
      title: "Alice",
      subtitle: "no país das Maravilhas",
      snippets:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <>
      <Header />
      <Banner />
      <div className="row inline m-5 ">
        {books.map((item) => (
          <CardProduct book={item} />
        ))}
      </div>
      
      {/* <CardModal image={hp} title="Harry Potter" subtitle="e a Pedra Filosofal" snippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores asperiores ipsum molestiae tempore rerum animi exercitationem beatae rem perferendis ad delectus illum illo dignissimos molestias, ducimus vel consectetur veritatis!" price={50} id={543}></CardModal> */}

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