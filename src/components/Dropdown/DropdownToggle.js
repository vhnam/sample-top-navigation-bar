import React from 'react';

import {ArrowDown} from '../Icons';

import styles from './Dropdown.module.css';

const DropdownToggle = ({children}) => {
  return (
    <div className={styles.dropdownToggle}>
      {children}
      <ArrowDown className={styles.arrow} />
    </div>
  );
};

export default DropdownToggle;
