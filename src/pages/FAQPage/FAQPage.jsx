import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import FAQComponent from "../../components/FAQComponent/FAQComponent";

import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";

function FAQPage() {

      const { setBanner } = useContext(BannerContext);
   
    useEffect(() => {
        setBanner({
          title: "F A Q",
          subtitle: "Tire suas duvidas",
          openingHours: "cadastre-se e receba a nossa Newsletter"
        });
      }, []);
  return (
    <>
      <Header />
      <Banner />
      <Search />

      <FAQComponent
        title="Qual é a Política de Privacidade e Segurança da Acervo?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio."
      />
      <FAQComponent
        title=" Como funciona a Política de Vendas?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio."
      />

      <FAQComponent
        title="Qual é a Política de Cookies?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    consectetur repellat alias est quia, tenetur delectus, a odit
    voluptatum ducimus eos eum at repellendus. Unde sit tempora blanditiis
    repellat optio."
      />
      <Footer />
    </>
  );
}

export default FAQPage;