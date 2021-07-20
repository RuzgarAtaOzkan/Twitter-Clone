// MODULES
import React from 'react';
import cn from 'classnames';

// ICONS
import { GrClose } from 'react-icons/gr';
import { RiAddCircleLine } from 'react-icons/ri';
import { BsPersonFill as ActivePersonIcon } from 'react-icons/bs';

import ProfileIcon from '../Icons/Profile';
import HomeIcon from '../Icons/Home';

// STYLES
import styles from './Sidebar.module.scss';

function Sidebar() {
  const sidebarItems = [
    { icon: <ProfileIcon />, title: 'Profile' },
    { icon: <ActivePersonIcon />, title: 'Lists' },
    { icon: <ActivePersonIcon />, title: 'Topics' },
    { icon: <ActivePersonIcon />, title: 'Bookmarks' },
    { icon: <ActivePersonIcon />, title: 'Moments' },
    { icon: <ActivePersonIcon />, title: 'Newsletters' },
    {
      icon: <ActivePersonIcon />,
      title: 'Twitter Ads',
      divider: true,
    },
    { icon: <ActivePersonIcon />, title: 'Analytics' },
    {
      icon: <ActivePersonIcon />,
      title: 'Settings and privacy',
      divider: true,
    },
    { icon: <ActivePersonIcon />, title: 'Help Center' },
    {
      icon: <ActivePersonIcon />,
      title: 'Data saver',
      divider: true,
    },
    { icon: <ActivePersonIcon />, title: 'Display' },
    { icon: <ActivePersonIcon />, title: 'Keyboard shortcuts' },
    { title: 'Logout', divider: true },
  ];

  return (
    <>
      <div className={styles['sidebar-area']}>
        <div className={styles['title-area']}>
          <div className={styles['title']}>Account info</div>
          <div className={styles['icon-area']}>
            <GrClose />
          </div>
        </div>

        <div className={styles['nav-area']}>
          <div className={styles['profiles-area']}>
            <div className={styles['profile']}>
              <img src="/assets/img/ruzgar.JPG" />
            </div>
            <div className={styles['add-profile-icon-area']}>
              <RiAddCircleLine />
            </div>
          </div>

          <div className={styles['info-area']}>
            <div className={styles['name']}>Ruzgar Ata Ozkan</div>
            <div className={styles['username']}>@RuzgarAtaOzkan</div>
          </div>

          <div className={styles['follows']}>
            <div className={styles['following']}>
              <span className={styles['count']}>115</span>
              <span className={styles['title']}>Following</span>
            </div>
            <div className={styles['followers']}>
              <span className={styles['count']}>85</span>
              <span className={styles['title']}>Followers</span>
            </div>
          </div>

          <div className={cn(styles['siderbar-items-area'])}>
            {sidebarItems?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.divider && <div className="dd-divider" />}
                  <div className={cn(styles['sidebar-item'])}>
                    {item.icon && (
                      <div className={styles['icon']}>
                        {item.icon}
                      </div>
                    )}

                    <div className={cn(item.icon && styles['title'])}>
                      {item.title}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
