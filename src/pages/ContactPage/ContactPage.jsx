import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import FormContact from "../../components/FormContact/FormContact";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";

import "./ContactPage.css"

function ContactPage() {
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