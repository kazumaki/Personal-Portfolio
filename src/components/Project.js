import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Project.module.css';

const Project = ({ project, id }) => (
  <div
    className={styles.projectBox}
    style={{ backgroundColor: project.background }}
  >
    <span className={styles.projectID}>{`.00${id + 1}`}</span>
    <img className={styles.projectImage} src={project.img} alt="project preview" />
    <div className={styles.bottomBox}>
      <div className={styles.bottomBoxInner}>
        <span className={styles.projectName}>{project.name}</span>
        <span className={styles.projectDescription}>{project.description}</span>
      </div>
      <a href={project.link}>
        <i className={`${styles.icon} fab ${project.icon} fa-2x`} />
      </a>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.objectOf(
    {
      img: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    },
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default Project;
