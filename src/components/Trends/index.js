// MODULES
import React from 'react';
import { Link } from 'react-router-dom';

import { FiSettings } from 'react-icons/fi';

// ICONS
import MoreIcon from '../Icons/More';

// STYLES
import styles from './Trends.module.scss';

function Trends() {
  return (
    <>
      <div className={styles['trends-area']}>
        <div className={styles['title-area']}>
          <div className={styles['title']}>Trends for you</div>

          <div className={styles['settings-icon']}>
            <FiSettings />
          </div>
        </div>

        <div className={styles['trend-section']}>
          <div className={styles['category']}>
            <div className={styles['trend-place']}>
              Trending in Turkey
            </div>

            <div className={styles['trend-settings']}>
              <MoreIcon />
            </div>
          </div>

          <div className={styles['trend-name']}>#acunilicali</div>
          <div className={styles['trend-count']}>37.9K Tweets</div>
        </div>

        <div className={styles['trend-section']}>
          <div className={styles['category']}>
            <div className={styles['trend-place']}>
              Trending in Turkey
            </div>

            <div className={styles['trend-settings']}>
              <MoreIcon />
            </div>
          </div>

          <div className={styles['trend-name']}>S-400</div>
          <div className={styles['trend-count']}>37.9K Tweets</div>
        </div>
        <div className={styles['trend-section']}>
          <div className={styles['category']}>
            <div className={styles['trend-place']}>
              Trending in Turkey
            </div>

            <div className={styles['trend-settings']}>
              <MoreIcon />
            </div>
          </div>

          <div className={styles['trend-name']}>Software</div>
          <div className={styles['trend-count']}>37.9K Tweets</div>
        </div>
        <div className={styles['trend-section']}>
          <div className={styles['category']}>
            <div className={styles['trend-place']}>
              Trending in Turkey
            </div>

            <div className={styles['trend-settings']}>
              <MoreIcon />
            </div>
          </div>

          <div className={styles['trend-name']}>#development</div>
          <div className={styles['trend-count']}>37.9K Tweets</div>
        </div>
        <div className={styles['trend-section']}>
          <div className={styles['category']}>
            <div className={styles['trend-place']}>
              Trending in Turkey
            </div>

            <div className={styles['trend-settings']}>
              <MoreIcon />
            </div>
          </div>

          <div className={styles['trend-name']}>#acunilicali</div>
          <div className={styles['trend-count']}>37.9K Tweets</div>
        </div>

        <div className={styles['show-more']}>
          <Link>Show more</Link>
        </div>
      </div>
    </>
  );
}

export default Trends;
