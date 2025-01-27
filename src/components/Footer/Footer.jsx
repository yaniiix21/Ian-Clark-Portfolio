import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.text}>
        <img
          src={getImageUrl("about/aboutImg.png")}
          alt="Me sitting with a laptop"
          className={styles.footerImg}
        />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("footer/emailIcon.png")} alt="Email icon" />
          <a href="mailto:clarkvillegas2021@gmail.com">clarkvillegas2021@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("footer/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ian-clark-villegas-39111a226/">linkedin.com/in/ian-clark-villegas-39111a226</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("footer/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/yaniiix21">github.com/yaniiix21</a>
        </li>
      </ul>
    </footer>
  );
};
