import React from 'react';
import Header from './Header';
import styles from '../styles/App.module.css';
import Footer from './Footer';
import Main from './Main';

const App = () => (
  <div className={styles.mainContainer}>
    <div className={styles.leftContainer}>
      <Header />
    </div>
    <div className={styles.rightContainer}>
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
