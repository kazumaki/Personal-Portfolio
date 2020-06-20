import React from 'react';
import styles from '../styles/Main.module.css';
import projects from '../projects';

const Main = () => (
  <main>
    {
      projects.map(
        (project, id) => (
          <div
            className={styles.projectBox}
            style={{ backgroundColor: project.background }}
            key={project.name}
          >
            <span className={styles.projectID}>{`.00${id + 1}`}</span>
            <img className={styles.projectImage} src={project.img} alt="project preview" />
            <div className={styles.bottomBox}>
              <div className={styles.bottomBoxInner}>
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.projectDescription}>{project.description}</span>
              </div>
              <a href={project.link}>kkj</a>
            </div>
          </div>
        ),
      )
    }
  </main>
);

export default Main;