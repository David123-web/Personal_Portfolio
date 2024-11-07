import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt="Profile Picture 2" 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Frontend Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building 
                responsive and optimized web interfaces using React, SwiftUI, and Android Studio.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Backend Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing optimized 
                back-end systems using Node.js, Express, and MongoDB for real-time and persistent applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ml.png")} alt="ML Icon" />
            <div className={styles.aboutItemText}>
              <h3>ML Engineer</h3>
              <p>
                I have applied machine learning models for tasks 
                like image recognition, emotion detection, and NLP, using tools like Python, and TensorFlow.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/phone.png")} alt="Phone Icon" />
            <div className={styles.aboutItemText}>
              <h3>iOS Developer</h3>
              <p>
                I have developed iOS applications, 
                focusing on Bluetooth-enabled device control, data storage, and seamless user experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/test.png")} alt="Test Icon" />
            <div className={styles.aboutItemText}>
              <h3>Testing Engineer</h3>
              <p>
                I have enhanced and customized testing frameworks, 
                optimizing simulations and reducing queuing times for more efficient system performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
