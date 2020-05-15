import React from 'react';

import styles from './Dropdown.module.css';

const DropdownMenu = ({children}) => {
  return <div className={styles.dropdownMenu}>{children}</div>;
};

export default DropdownMenu;
