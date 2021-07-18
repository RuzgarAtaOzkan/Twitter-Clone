import React from 'react';

// ICONS
import { GiJusticeStar } from 'react-icons/gi';

// STYLES
import styles from './Home.module.scss';

function HomeFeed() {
  return (
    <>
      <section className={styles['home-feed']}>
        <div className={styles['title']}>
          <h1>Home</h1>
          <div>
            <GiJusticeStar />
          </div>
        </div>
        <div className={styles['tweet']}>
          <div className={styles['profile-photo']}>
            <img />
          </div>

          <div className={styles['profile-photo']}>
            <img />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFeed;
