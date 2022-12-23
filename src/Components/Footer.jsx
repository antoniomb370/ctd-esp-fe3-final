import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";
import { LinksLogo } from "./utils/LinksLogo";


const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  const {logoFacebook,logoInstagram,logoWhatsapp,logoTiktok,logoDigitalHouse}=LinksLogo;
  return (

    <footer className={theme}>
      <img className="logoFooter" src={logoDigitalHouse.link} alt={logoDigitalHouse.name} />
      <img className="logos" src={logoFacebook.link} alt={logoFacebook.name} />
      <img className="logos" src={logoInstagram.link} alt={logoInstagram.name} />
      <img className="logos" src= {logoTiktok.link} alt={logoTiktok.name} />
      <img className="logos" src= {logoWhatsapp.link} alt={logoWhatsapp.name}/>
    </footer>

  );
};

export default Footer;

