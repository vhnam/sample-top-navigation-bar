import React, {useState, useCallback} from 'react';
import clsx from 'clsx';

import useToggle from '../../hooks/useToggle';

import {Favicon, Menu, Close} from '../Icons';
import Dropdown, {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '../Dropdown';

import styles from './TopNavigationBar.module.css';

const TopNavigationBar = () => {
  const toggleMenu = useToggle(false);
  const [dropdownState, setDropdownState] = useState([false, false]);

  const setActive = useCallback((index) => {
    const newState = [false, false];
    newState[index] = true;
    setDropdownState(newState);
  }, []);

  const setInActive = useCallback(() => {
    setDropdownState([false, false]);
  }, []);

  window.addEventListener(
    'orientationchange',
    () => {
      setInActive();
      toggleMenu.setInActive();
    },
    false,
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Favicon className={styles.favicon} />
        <button className={styles.toggler} onClick={() => toggleMenu.toggle()}>
          {toggleMenu.active ? <Close /> : <Menu />}
        </button>

        <div
          className={clsx(styles.collapse, {
            [styles.show]: toggleMenu.active,
          })}
        >
          <ul className={styles.navBar}>
            <li className={styles.navBarItem}>
              <Dropdown
                show={dropdownState[0]}
                onMouseEnter={() => setActive(0)}
                onMouseLeave={() => setInActive()}
                onTouchStart={() =>
                  dropdownState[0] ? setInActive() : setActive(0)
                }
              >
                <DropdownToggle>Instruments</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Trumpets</DropdownItem>
                  <DropdownItem>Trombones</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className={styles.navBarItem}>
              <Dropdown
                show={dropdownState[1]}
                onMouseEnter={() => setActive(1)}
                onMouseLeave={() => setInActive()}
                onTouchStart={() =>
                  dropdownState[1] ? setInActive() : setActive(1)
                }
              >
                <DropdownToggle>Mouthpieces</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Standard</DropdownItem>
                  <DropdownItem>Artisan</DropdownItem>
                  <DropdownItem>Megatone</DropdownItem>
                  <DropdownItem>Commercial</DropdownItem>
                  <DropdownItem>Symphonic</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className={styles.navBarItem}>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
