import React from 'react';

import styles from './Dropdown.module.css';

const DropdownItem = ({children}) => {
  return <div className={styles.dropdownItem}>{children}</div>;
};

export default DropdownItem;
