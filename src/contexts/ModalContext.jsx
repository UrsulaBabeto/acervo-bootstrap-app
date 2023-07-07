import { createContext, useState } from "react";
import CardModal from "../components/CardModal/CardModal";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
  book: {},
  setBook: () => {},
});

export const ModalProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false);
  const [book, setBook] = useState({});
  return (
    <ModalContext.Provider value={{ showModal, setShowModal, book, setBook }}>
      {children}
      {showModal && <CardModal/>}
    </ModalContext.Provider>
  );
};
