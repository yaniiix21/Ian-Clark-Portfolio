import React from "react";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <section id="contact" class="contact py-5">
    <div className={styles.container}>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="text-center mb-5">
          <div className={styles.text}>
        <h2>Contact</h2>
      </div>
            <hr class="w-25 mx-auto" />
            <h2 class="mb-4">I'd love to hear from you.</h2>
            <p class="lead">
              If you have any questions or would like to work together, please
              contact me with the form below.
            </p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" name="contact" data-netlify= "true">
          
            <div className={`${styles.placeholder} mb-5`}>
            <input type="hidden" name="access_key" value="bd55f954-2d66-403f-b600-8cbb594efadc" />
              <input 
                type="text"
                class="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className={`${styles.placeholder} mb-5`}>
              <input
                type="email"
                class="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className={`${styles.placeholder} mb-5`}>
              <textarea
                class="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="mb-5 d-grid">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
};
