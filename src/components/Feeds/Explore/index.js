// MODULES
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ICONS
import SettingsIcon from '../../Icons/Settings';

// COMPONENTS
import Input from '../../Input';
import Trends from '../../Trends';

// DISPATCH ACTIONS
import { setSidebar } from '../../../state/global/actions';

// STYLES
import styles from './Explore.module.scss';

function Explore() {
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles['feed-area']}>
        <div className={styles['search-area']}>
          <div
            onClick={() => dispatch(setSidebar(true))}
            className={styles['image']}
          >
            <img alt="Profile" src="/assets/img/ruzgar.JPG" />
          </div>

          <div className={styles['input-area']}>
            <Input placeholder="Search Twitter" />
          </div>
          <div className={styles['icon-area']}>
            <SettingsIcon />
          </div>
        </div>

        <div className={styles['media-area']}>
          <div className={styles['visual-area']}>
            <img alt="Profile" src="/assets/img/ruzgar.JPG" />

            <div className={styles['info-area']}>
              <div className={styles['profile-info']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />

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

        <div className={styles['whats-happening-area']}>
          <div className={styles['title-area']}>
            <div className={styles['title']}>What's happening</div>
          </div>

          <div className={styles['section']}>
            <div className={styles['left-area']}>
              <div className={styles['info']}>
                World news . Last night
              </div>

              <div className={styles['content']}>
                French President Macron, Pakistani PM Khan and Iraqi
                President Salih among leaders targeted by Pegasus
                spyware, according to multiple reports
              </div>
            </div>

            <div className={styles['right-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
          </div>
          <div className={styles['section']}>
            <div className={styles['left-area']}>
              <div className={styles['info']}>
                World news . Last night
              </div>

              <div className={styles['content']}>
                French President Macron, Pakistani PM Khan and Iraqi
                President Salih among leaders targeted by Pegasus
                spyware, according to multiple reports
              </div>
            </div>

            <div className={styles['right-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
          </div>
          <div className={styles['section']}>
            <div className={styles['left-area']}>
              <div className={styles['info']}>
                World news . Last night
              </div>

              <div className={styles['content']}>
                French President Macron, Pakistani PM Khan and Iraqi
                President Salih among leaders targeted by Pegasus
                spyware, according to multiple reports
              </div>
            </div>

            <div className={styles['right-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
          </div>
          <div className={styles['section']}>
            <div className={styles['left-area']}>
              <div className={styles['info']}>
                World news . Last night
              </div>

              <div className={styles['content']}>
                French President Macron, Pakistani PM Khan and Iraqi
                President Salih among leaders targeted by Pegasus
                spyware, according to multiple reports
              </div>
            </div>

            <div className={styles['right-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
          </div>

          <div className={styles['show-more']}>
            <Link>Show more</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
