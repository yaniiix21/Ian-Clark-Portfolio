import React from "react";
import styles from "./Profile.module.css";
import profile from "../../data/profile.json"
import resume from "../../../assets/resume/Ian-Clark-Villegas-Resume.pdf"

export const Profile = () => {
  return (
    <section id="profile" className={`${styles.profile} profile my-6`}>
      <div className={styles.container}>
      <h2 className={styles.title}>Profile</h2>
        <div className="row">
          <div className={`${styles.content} col`}>
            <h3 className={`${styles.details} text-uppercase fw-bold`}>Details</h3>
            <p>
              Here is some more info about myself to help you get to know me
              better.
            </p>
            <ul className={`${styles.profileItems}`}>
            {profile.map((profileItem, id) => {
            return (
                <li key={id} className={`${styles.profileItem} spacer mb-3`}>
                <h4>
                {profileItem.title}
                    </h4>
                    <p>{profileItem.details}</p>
                    </li>
                );
            })}
            </ul>
          </div>
          <div className={`${styles.content} col`}>
            <h3 className="text-uppercase fw-bold">Skills</h3>
            <p>
              Here is a list of my skills with these dumb percentages that don't
              mean anything 😉
            </p>
            {[
              { skill: "HTML 5", level: "100%" },
              { skill: "CSS", level: "90%" },
              { skill: "JavaScript", level: "90%" },
              { skill: "Bootstrap", level: "100%" },
              { skill: "React.JS", level: "75%" },
              { skill: "Node.JS", level: "75%" },
              { skill: "UI/UX", level: "75%" },
            ].map(({ skill, level }) => (
              <div key={skill}>
                <h5>
                  <i className="fas fa-check"></i> {skill}
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={parseInt(level)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: level }}
                  >
                    {level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className= "row mt-5 text-center">
          <div className="col-12">
            <a
              href= {resume}
              className="btn btn-info btn-lg text-uppercase px-5 mx-3 my-2"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
