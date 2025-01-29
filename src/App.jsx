import React from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Contact} from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
