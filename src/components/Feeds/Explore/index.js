// MODULES
import React from 'react';

// ICONS
import SettingsIcon from '../../Icons/Settings';
import SearchIcon from '../../Icons/Search';

// COMPONENTS
import Input from '../../Input';
import Trends from '../../Trends';

// STYLES
import styles from './Explore.module.scss';

function Explore() {
  return (
    <>
      <section className={styles['feed-area']}>
        <div className={styles['search-area']}>
          <div className={styles['input-area']}>
            <Input placeholder="Search Twitter" />
          </div>
          <div className={styles['icon-area']}>
            <SettingsIcon />
          </div>
        </div>

        <div className={styles['media-area']}>
          <div className={styles['visual-area']}>
            <img src="/assets/img/ruzgar.JPG" />

            <div className={styles['info-area']}>
              <div className={styles['profile-info']}>
                <img src="/assets/img/ruzgar.JPG" />

                <div className={styles['name']}>Ruzgar Ata Ozkan</div>

                <div className={styles['time']}>. last night</div>
              </div>

              <div className={styles['content']}>
                Devastating flash floods leave passengers trapped in
                chest-high water on a Chinese underground train
              </div>
            </div>
          </div>
        </div>

        <Trends />

        <div className={styles['whats-happening']}>
          <div className={styles['visual-area']}>
            <img src="/assets/img/ruzgar.JPG" />

            <div className={styles['info-area']}>
              <div className={styles['profile-info']}>
                <img src="/assets/img/ruzgar.JPG" />

                <div className={styles['name']}>Ruzgar Ata Ozkan</div>

                <div className={styles['time']}>. last night</div>
              </div>

              <div className={styles['content']}>
                Devastating flash floods leave passengers trapped in
                chest-high water on a Chinese underground train
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
