import React from 'react';
import '../styles/Main.module.css';
import projects from '../projects';
import Project from './Project';

const Main = () => (
  <main>
    {
      projects.map(
        (project, id) => (
          <Project project={project} id={id} key={project.name} />
        ),
      )
    }
  </main>
);

export default Main;
