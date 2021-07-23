// MODULES
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// STYLES
import styles from './Notifications.module.scss';

function Notifications() {
  return (
    <>
      <section className={styles['notifications-feed']}></section>
    </>
  );
}

export default Notifications;
