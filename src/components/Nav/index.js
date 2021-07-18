import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import cn from 'classnames';

// STYLES
import styles from './Nav.module.scss';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <div className={cn(styles['list-item-container'])}>
                <div className={styles['main-icon']}>
                  <FaTwitter />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Home</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Explore</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Notifications</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Messages</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Bookmarks</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Lists</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>Profile</div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className={styles['list-item-container']}>
                <div className={styles['icon']}>
                  <FaTwitter />
                </div>

                <div className={styles['title']}>More</div>
              </div>
            </Link>
          </li>
        </ul>

        <div className={styles['account']}>
          <img />
          <div className={styles['/info']}>
            <div className={styles['name']}>Ruzgar</div>
            <div className={styles['username']}>@RuzgarAtaOzkan</div>
          </div>
          <div>...</div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
