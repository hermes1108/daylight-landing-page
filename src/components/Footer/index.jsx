import React from "react";
import { Link } from "react-scroll";
import "./style.css";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";
import Icon from "../Icon";
const Footer = () => {
  return (
    <div className="footer-container" id="blog">
      <div className="footer-container-inner">
        <div className="footer--top">
          <Icon
            imgsrc={LogoBrand}
            link="/"
            classnamestyle="footer--top-brand aic hover-effect"
          />
          <div className="footer--links">
            <Link to="vision" spy={true} smooth={true} className="footer--link hover-effect">Our Vision</Link>
            <Link to="feature" spy={true} smooth={true} className="footer--link hover-effect">Features</Link>
            <Link to="tokenomics" spy={true} smooth={true} className="footer--link hover-effect">Tokenomics</Link>
            <Link to="blog" spy={true} smooth={true} className="footer--link hover-effect">Blog</Link>
          </div>
          <div className="footer--social">
            <Icon
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
              imgsrc={discordIcon}
              link="#"
              classnamestyle="footer--social-icon aic"
            />
            <Icon
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
              imgsrc={telegramIcon}
              link="https://t.me/Daylightprotocol"
              classnamestyle="footer--social-icon aic"
            />
            <Icon
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
              imgsrc={twitterIcon}
              link="https://twitter.com/DaylightDeFi"
              classnamestyle="footer--social-icon aic"
            />
          </div>
        </div>

        <div className="footer--bottom-text">
          © Daylight {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
