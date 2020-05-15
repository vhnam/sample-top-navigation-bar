import React from 'react';
import clsx from 'clsx';

import styles from './Dropdown.module.css';

const Dropdown = ({
  show,
  children,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
}) => {
  return (
    <div
      className={clsx(styles.dropdown, {
        [styles.show]: show,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
};

export default Dropdown;
