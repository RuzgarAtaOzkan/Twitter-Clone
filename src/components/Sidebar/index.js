// MODULES
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

// ICONS
import ProfileIcon from '../Icons/Profile';
import ListIcon from '../Icons/List';
import TopicIcon from '../Icons/Topic';
import BookmarkIcon from '../Icons/Bookmark';
import BoltIcon from '../Icons/Bolt';
import ArticleIcon from '../Icons/Article';
import AdsIcon from '../Icons/Ads';
import GraphIcon from '../Icons/Graph';
import SettingsIcon from '../Icons/Settings';
import QuestionMarkIcon from '../Icons/QuestionMark';
import PieChartIcon from '../Icons/PieChart';
import BrushIcon from '../Icons/Brush';
import CloseIcon from '../Icons/Close';
import AddIcon from '../Icons/Add';

// DISPATCH ACTIONS
import { setSidebar } from '../../state/global/actions';

// STYLES
import styles from './Sidebar.module.scss';

function Sidebar() {
  const iseSidebarOpen = useSelector(
    (state) => state.global.isSidebarOpen,
  );

  const dispatch = useDispatch();

  const sidebarItems = [
    { icon: <ProfileIcon />, title: 'Profile', path: '/profile' },
    { icon: <ListIcon />, title: 'Lists', path: '/profile' },
    { icon: <TopicIcon />, title: 'Topics', path: '/profile' },
    { icon: <BookmarkIcon />, title: 'Bookmarks', path: '/profile' },
    { icon: <BoltIcon />, title: 'Moments', path: '/profile' },
    { icon: <ArticleIcon />, title: 'Newsletters', path: '/profile' },
    {
      icon: <AdsIcon />,
      title: 'Twitter Ads',
      divider: true,
      path: '/profile',
    },
    { icon: <GraphIcon />, title: 'Analytics', path: '/profile' },
    {
      icon: <SettingsIcon />,
      title: 'Settings and privacy',
      divider: true,
      path: '/profile',
    },
    {
      icon: <QuestionMarkIcon />,
      title: 'Help Center',
      path: '/profile',
    },
    {
      icon: <PieChartIcon />,
      title: 'Data saver',
      divider: true,
      path: '/profile',
    },
    { icon: <BrushIcon />, title: 'Display', path: '/profile' },
    {
      icon: <BrushIcon />,
      title: 'Keyboard shortcuts',
      path: '/profile',
    },
    { title: 'Logout', divider: true, path: '/profile' },
  ];

  return (
    <>
      <div
        className={cn(
          styles['sidebar-area'],
          iseSidebarOpen && styles['sidebar-active'],
        )}
      >
        <div className={styles['title-area']}>
          <div className={styles['title']}>Account info</div>
          <div
            onClick={() => dispatch(setSidebar(false))}
            className={styles['icon-area']}
          >
            <CloseIcon />
          </div>
        </div>

        <div className={styles['nav-area']}>
          <div className={styles['profiles-area']}>
            <div className={styles['profile']}>
              <img src="/assets/img/ruzgar.JPG" />
            </div>
            <div className={styles['add-profile-icon-area']}>
              <AddIcon />
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

                  <Link to={item.path}>
                    <div className={cn(styles['sidebar-item'])}>
                      {item.icon && (
                        <div className={styles['icon']}>
                          {item.icon}
                        </div>
                      )}

                      <div
                        className={cn(item.icon && styles['title'])}
                      >
                        {item.title}
                      </div>
                    </div>
                  </Link>
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
