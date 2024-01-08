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
        Dynamic Mobile App Developer with 5 years experience in React Native and UI focus | Expert in Cross-Platform Development & Third-Party Integrations.
        </p>
        {/* <div className="about_left_socialMedia">
          <img src={github.src} alt="" onClick={() => window.open("https://github.com/iamhiman", "_blank")} />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <img src={gmail.src} alt="" onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")} />
        </div> */}
        <div
          className="about_left_starme"
          onClick={() => window.open("https://drive.google.com/file/d/1Wv4S9I-EkbYq_-OUuf8u3qbw6JN54kt-/view?usp=drive_link", "_blank")}
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
