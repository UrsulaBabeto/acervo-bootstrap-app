import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import FAQQuestion from "../../components/FAQQuestion/FAQQuestion";
import FAQAnswer from "../../components/FAQAnswer/FAQAnswer";

import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";

function FAQPage() {
  const { setBanner } = useContext(BannerContext);
  const questions = [
    {
      question: "Qual é a Política de Privacidade e Segurança da Acervo?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur repellat alias est quia, tenetur delectus, a odit voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis repellat optio.",
    },
    {
      question: "Como funciona a Política de Vendas?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam  consectetur repellat alias est quia, tenetur delectus, a odit voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis repellat optio.",
    },
    {
      question: "Qual é a Política de Cookies?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam  consectetur repellat alias est quia, tenetur delectus, a odit voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis repellat optio.",
    },
  ];

  useEffect(() => {
    setBanner({
      title: "F A Q",
      subtitle: "Tire suas duvidas",
      openingHours: "cadastre-se e receba a nossa Newsletter",
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Search />

      {questions.map((item, i) => (
        <FAQQuestion
          key={i}
          question={item.question}
          answer={<FAQAnswer answer={item.answer} />}
        />
      ))}
      <Footer />
    </>
  );
}

export default FAQPage;
