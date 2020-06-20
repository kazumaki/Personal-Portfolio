import React from 'react';
import styles from '../styles/Main.module.css';
import projects from '../projects';

const Main = () => (
  <main>
    {
      projects.map(
        (project, id) => (
          <div className={styles.projectBox} style={{backgroundColor: project.background}} key={project.name}>
            <h1>{`.00${id + 1}`}</h1>
            <h1>{project.name}</h1>
            <h1>{project.description}</h1>
            <a href={project.link}>kkj</a>
          </div>
        ),
      )
    }
  </main>
);

export default Main;