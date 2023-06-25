import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const BannerContext = createContext({
  banner: {
    title:"",
    subtitle:"",
    openingHours:""
  },
  setBanner: () => {},
});

export function BannerProvider ({ children }) {
  const [banner, setBanner] = useState({
    title: "Default Title",
    subtitle: "Default Subtitle",
    openingHours: "Default Opening Hours"
  });

  return(
    <BannerContext.Provider value= {{banner, setBanner}}>
        {children}
    </BannerContext.Provider>
  )
};

BannerProvider.propTypes = {
  children: PropTypes.node,
};