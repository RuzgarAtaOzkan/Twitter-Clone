// MODULES
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

// STYLES
import styles from './BackgroundCover.module.scss';

function BackgroundCover() {
  const global = useSelector((state) => state.global);

  return global.isSidebarOpen ? (
    <div className={styles['cover-area']}>
      <div className={cn(styles['cover'])} />
    </div>
  ) : null;
}

export default BackgroundCover;
