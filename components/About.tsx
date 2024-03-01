import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Taha Salman</h1>
        <p className="about_left_text">
        Dynamic Mobile App Developer with 6 years experience in React Native and UI focus | Expert in Cross-Platform Development & Third-Party Integrations.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/taha-salman-mobile-app-developer/", "_blank")}
          />
          <img src={gmail.src} alt="" onClick={() => window.open("mailto:TahaSalman001@hotmail.com", "_blank")} />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://drive.google.com/file/d/16Joj56zpbfUGTik8NMX7bW-kZPjFuklA/view?usp=drive_link", "_blank")}
        >
          My Resume
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
