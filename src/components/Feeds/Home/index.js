import React from 'react';

// ICONS
import { GiJusticeStar } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';

// STYLES
import styles from './Home.module.scss';

function HomeFeed() {
  return (
    <>
      <section className={styles['home-feed']}>
        <div className={styles['title']}>
          <h1>Home</h1>
          <div className={styles['title-icon']}>
            <GiJusticeStar />
          </div>
        </div>

        <div className={styles['tweet']}>
          <div className={styles['left-side']}>
            <img src="/assets/img/ruzgar.JPG" />
          </div>

          <div className={styles['right-side']}>
            <textarea placeholder="What's happening ?" />

            <div className={styles['reply-options-area']}>
              <div className={styles['reply-options']}>
                <div className={styles['reply-icon']}>
                  <BiWorld />
                </div>

                <div className={styles['reply-title']}>
                  Everyone can reply
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFeed;
