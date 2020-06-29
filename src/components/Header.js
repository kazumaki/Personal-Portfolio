import React from 'react';
import styles from '../styles/Header.module.css';

const icons = [
  {
    icon: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/vcamposcarvalho/',
  },
  {
    icon: 'fa-github-square',
    link: 'https://github.com/kazumaki',
  },
  {
    icon: 'fa-twitter-square',
    link: 'https://twitter.com/iKazumaki',
  },
  {
    icon: 'fa-angellist',
    link: 'https://angel.co/u/vinicius-campos-carvalho',
  },
];

const handleMouseOver = element => {
  element.target.classList.add('fa-3x');
  element.target.classList.add(styles.iconHover);
};

const handleMouseOut = element => {
  element.target.classList.remove('fa-3x');
};

const Header = () => (
  <header>
    <div className="head-text">
      <h1>DEVELOPER.</h1>
      <h1>RELIABLE.</h1>
      <h1>FAST</h1>
      <h1>& SMART.</h1>
    </div>
    <div className="head-description">
      Full Stack Web Developer. Currently looking for new opportunities.
      Follow my work on Social Media below.
    </div>
    <div className={styles.socialNetworks}>
      {
        icons.map(
          icon => (
            <a href={icon.link} key={icon.icon}>
              <i
                key={icon.icon}
                className={`${styles.icon} fab ${icon.icon} fa-2x`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onFocus={handleMouseOver}
                onBlur={handleMouseOut}
              />
            </a>
          ),
        )
      }
    </div>
    <a href="mailto:vcampos.pitangui@gmail.com">
      <button className={styles.btnSendEmail} type="button">Contact Me!</button>
    </a>
  </header>
);

export default Header;
