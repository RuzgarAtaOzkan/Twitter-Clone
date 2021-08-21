// MODULES
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

// STYLES
import styles from './Display.module.scss';

function Display({ open, setOpen, setClose, classNames }) {
  return open ? (
    <div className={cn(styles['display-area'])}>
      <div
        onClick={() => setClose()}
        className={styles['display-background']}
      ></div>
      <div className={cn(styles['display'])}>dsffsdsfd</div>
    </div>
  ) : null;
}

export default Display;
