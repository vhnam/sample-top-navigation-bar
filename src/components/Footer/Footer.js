import React from 'react';

import {Favicon} from '../Icons';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Favicon className={styles.favicon} />
    </div>
  </footer>
);

export default Footer;
