import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import FormContact from "../../components/FormContact/FormContact";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";

import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";

import "./ContactPage.css"

function ContactPage() {
    const { setBanner } = useContext(BannerContext);
   
    useEffect(() => {
        setBanner({
          title: "Contato",
          subtitle: "Estamos felizes em atende-lo",
          openingHours: "cadastre-se e receba a nossa Newsletter"
        });
      }, []);
    return (
        <>
            <Header></Header>
            <Banner></Banner>

      
           <FormContact></FormContact>
            <Maps></Maps>
        
            <Footer></Footer>
        </>
    );
}

export default ContactPage;