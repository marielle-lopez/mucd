import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social_media}>
        <Link to="https://www.facebook.com/">
          <img
            className={styles.footer__social_media__icon}
            src="/facebook.png"
            alt="Facebook icon"
          />
        </Link>
        <Link to="https://www.instagram.com/">
          <img
            className={styles.footer__social_media__icon}
            src="/instagram.png"
            alt="Instagram icon"
          />
        </Link>
        <Link to="https://www.tiktok.com/">
          <img
            className={styles.footer__social_media__icon}
            src="/tiktok.png"
            alt="TikTok icon"
          />
        </Link>
      </div>
      <div className={styles.footer__text}>
        <p>Want to get involved or need more information?</p>
        <p>Contact us via social media or email us!</p>
      </div>
      <div className={styles.footer__other_info}>
        <div className={styles.footer__other_info__item}>
          <img
            className={styles.footer__other_info__item__icon}
            src="/location.png"
            alt="Location icon"
          />
          <p>Tin Alley, Parkville VIC 3052</p>
        </div>
        <div className={styles.footer__other_info__item}>
          <img
            className={styles.footer__other_info__item__icon}
            src="/email.png"
            alt="Email icon"
          />
          <p>melbspiritcheer@gmail.com</p>
        </div>
      </div>
      <img
        className={styles.footer__logo}
        src="/mucd-logo.png"
        alt="Melbourne University Cheer and Dance logo"
      />
    </footer>
  );
};

export default Footer;
