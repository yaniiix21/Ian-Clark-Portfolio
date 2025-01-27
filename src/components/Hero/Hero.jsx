import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [typedText, setTypedText] = useState(""); 
  const fullText = " Hi I am Ian Clark Villegas";
  const typingDelay = 80;
  const pauseBeforeRestart = 10000; 

  useEffect(() => {
    let index = 0; 
    let isTyping = true; 
    let timeout; 

    const startTyping = () => {
      if (index < fullText.length && isTyping) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
        timeout = setTimeout(startTyping, typingDelay);
      } else if (index === fullText.length) {
        isTyping = false;
        timeout = setTimeout(() => {
          setTypedText("");
          index = 0;
          isTyping = true;
          startTyping();
        }, pauseBeforeRestart);
      }
    };

    startTyping();

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className="display-1 fw-bold text-white" style={{ fontSize: "4rem" }}>{typedText}</h1>
        <p className={styles.description}>
          I'm a Web developer with almost 5 years of experience using React,
          NodeJS And Javascript. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:clarkvillegas2021@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ian.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
