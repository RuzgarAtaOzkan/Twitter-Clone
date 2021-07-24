// MODULES
import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ICONS
import SettingsIcon from '../../Icons/Settings';
import TwitterIcon from '../../Icons/Twitter';
import ProfileIcon from '../../Icons/Profile';
import MessageIcon from '../../Icons/Message';
import RetweetIcon from '../../Icons/Retweet';
import HeartIcon from '../../Icons/Heart';
import ShareIcon from '../../Icons/Share';
import MoreIcon from '../../Icons/More';

// DISPATCH ACTIONS
import { setSidebar } from '../../../state/global/actions';

// STYLES
import styles from './Notifications.module.scss';

function Notifications() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <section className={styles['notifications-feed']}>
        <div className={styles['title-container']}>
          <div className={styles['title-area']}>
            <div className={styles['profile-container']}>
              <div
                onClick={() => dispatch(setSidebar(true))}
                className={styles['image']}
              >
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>
              <h1>Notifications</h1>
            </div>
            <div className={styles['title-icon']}>
              <SettingsIcon />
            </div>
          </div>

          <div className={styles['categories-area']}>
            <div
              onClick={() => setActiveCategory(0)}
              className={cn(
                styles['category'],
                activeCategory === 0 ? styles['active'] : null,
              )}
            >
              All
            </div>
            <div
              onClick={() => setActiveCategory(1)}
              className={cn(
                styles['category'],
                activeCategory === 1 ? styles['active'] : null,
              )}
            >
              Mentions
            </div>
          </div>
        </div>

        <div className={styles['notifications-area']}>
          <div className={cn(styles['login-notification'])}>
            <div className={styles['icon-area']}>
              <TwitterIcon />
            </div>

            <div className={styles['content']}>
              There was a login to your account @RuzgarAtaOzkan from a
              new device on Jul 20, 2021. Review it now.
            </div>
          </div>
          <div className={cn(styles['login-notification'])}>
            <div className={styles['icon-area']}>
              <TwitterIcon />
            </div>

            <div className={styles['content']}>
              There was a login to your account @RuzgarAtaOzkan from a
              new device on Jul 20, 2021. Review it now.
            </div>
          </div>

          <div className={cn(styles['login-notification'])}>
            <div className={styles['icon-area']}>
              <TwitterIcon />
            </div>

            <div className={styles['content']}>
              There was a login to your account @RuzgarAtaOzkan from a
              new device on Jul 20, 2021. Review it now.
            </div>
          </div>

          <div className={cn(styles['login-notification'])}>
            <div className={styles['icon-area']}>
              <TwitterIcon />
            </div>

            <div className={styles['content']}>
              There was a login to your account @RuzgarAtaOzkan from a
              new device on Jul 20, 2021. Review it now.
            </div>
          </div>

          <div className={cn(styles['contact-notification'])}>
            <div className={styles['icon-area']}>
              <ProfileIcon active />
            </div>

            <div className={styles['info']}>
              <div className={styles['persons']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['content']}>
                Your contact <span>Ruzgar Ata ozkan </span>
                (@RuzgarAtaOzkan) is on Twitter!
              </div>
            </div>
          </div>
          <div className={cn(styles['contact-notification'])}>
            <div className={styles['icon-area']}>
              <ProfileIcon active />
            </div>

            <div className={styles['info']}>
              <div className={styles['persons']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['content']}>
                Your contact <span>Ruzgar Ata ozkan </span>
                (@RuzgarAtaOzkan) is on Twitter!
              </div>
            </div>
          </div>
          <div className={cn(styles['contact-notification'])}>
            <div className={styles['icon-area']}>
              <ProfileIcon active />
            </div>

            <div className={styles['info']}>
              <div className={styles['persons']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['content']}>
                Your contact <span>Ruzgar Ata ozkan </span>
                (@RuzgarAtaOzkan) is on Twitter!
              </div>
            </div>
          </div>
          <div className={cn(styles['contact-notification'])}>
            <div className={styles['icon-area']}>
              <ProfileIcon active />
            </div>

            <div className={styles['info']}>
              <div className={styles['persons']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['content']}>
                Your contact <span>Ruzgar Ata ozkan </span>
                (@RuzgarAtaOzkan) is on Twitter!
              </div>
            </div>
          </div>

          <div className={cn(styles['post-notification'])}>
            <div className={styles['image-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>

            <div className={styles['info']}>
              <div className={styles['user-info']}>
                <div className={styles['user']}>
                  <div className={styles['name']}>Basar</div>
                  <div className={styles['username']}>
                    @basarballioz
                  </div>
                  <div className={styles['date']}>. May 12</div>
                </div>

                <div className={styles['actions']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['reply']}>
                Replying to <span>@fkadev</span>
              </div>

              <div className={styles['label']}>@ruzgarataozkan</div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <MessageIcon />
                </div>
                <div className={styles['tweet-option']}>
                  <RetweetIcon />
                </div>
                <div className={styles['tweet-option']}>
                  <HeartIcon />
                </div>
                <div className={styles['tweet-option']}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Notifications;
