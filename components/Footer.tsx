import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/taha-salman-mobile-app-developer/", "_blank")}
          />
          <img src={Gmail.src} alt="" onClick={() => window.open("mailto:TahaSalman001@hotmail.com", "_blank")} />
        </div>
      </div>
    </footer>
  );
};
