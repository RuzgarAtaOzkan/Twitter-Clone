// MODULES
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Dropdown from '../Dropdown';
import Sidebar from '../Sidebar';

// ICONS
import HomeIcon from '../Icons/Home';
import HashtagIcon from '../Icons/Hashtag';
import BellIcon from '../Icons/Bell';
import MailIcon from '../Icons/Mail';
import BookmarkIcon from '../Icons/Bookmark';
import ListIcon from '../Icons/List';
import ProfileIcon from '../Icons/Profile';
import MoreIcon from '../Icons/More';
import ConversationIcon from '../Icons/Conversation';
import BoltIcon from '../Icons/Bolt';
import ArticleIcon from '../Icons/Article';
import GraphIcon from '../Icons/Graph';
import SettingsIcon from '../Icons/Settings';
import QuestionMarkIcon from '../Icons/QuestionMark';
import BrushIcon from '../Icons/Brush';
import TwitterIcon from '../Icons/Twitter';
import AdsIcon from '../Icons/Ads';
import FeatherIcon from '../Icons/Feather';

// STYLES
import styles from './Nav.module.scss';

function Nav() {
  const [activeIcon, setActiveIcon] = useState(-1);
  const [moreOptionsDropdown, setMoreOptionsDropdown] =
    useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const navItems = [
    {
      activeIcon: <HomeIcon active />,
      icon: <HomeIcon />,
      title: 'Home',
      path: '/home',
    },
    {
      activeIcon: <HashtagIcon active />,
      icon: <HashtagIcon />,
      title: 'Explore',
      path: '/explore',
    },
    {
      activeIcon: <BellIcon active />,
      icon: <BellIcon />,
      title: 'Notifications',
      path: '/notifications',
    },
    {
      activeIcon: <MailIcon active />,
      icon: <MailIcon />,
      title: 'Messages',
      path: '/messages',
    },
    {
      activeIcon: <BookmarkIcon active />,
      icon: <BookmarkIcon />,
      title: 'Bookmarks',
      path: '/bookmarks',
    },
    {
      activeIcon: <ListIcon active />,
      icon: <ListIcon />,
      title: 'Lists',
      path: '/lists',
    },
    {
      activeIcon: <ProfileIcon active />,
      icon: <ProfileIcon />,
      title: 'Profile',
      path: '/profile',
    },
    {
      dropdown: (
        <Dropdown
          items={[
            {
              icon: <ConversationIcon />,
              title: 'Topics',
            },
            {
              icon: <BoltIcon />,
              title: 'Moments',
            },
            {
              icon: <ArticleIcon />,
              title: 'Newsletters',
            },
            {
              icon: <AdsIcon />,
              title: 'Twitter Ads',
            },
            {
              icon: <GraphIcon />,
              title: 'Analytics',
            },
            {
              icon: <SettingsIcon />,
              title: 'Settings and Privacy',
              divider: true,
            },
            {
              icon: <QuestionMarkIcon />,
              title: 'Help Center',
            },
            {
              icon: <BrushIcon />,
              title: 'Display',
            },
          ]}
          active={moreOptionsDropdown}
          setActive={setMoreOptionsDropdown}
        />
      ),
      activeIcon: <MoreIcon active />,
      icon: <MoreIcon />,
      title: 'More',
      onClick: () => {
        setMoreOptionsDropdown(!moreOptionsDropdown);
      },
    },
  ];

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <div
                className={cn(
                  styles['list-item-container'],
                  styles['reset'],
                )}
              >
                <Link to="/home">
                  <div className={cn(styles['main-icon'])}>
                    <TwitterIcon />
                  </div>
                </Link>
              </div>
            </li>
            {navItems.map((navItem, index) => {
              return (
                <li key={index}>
                  <div
                    className={cn(
                      styles['list-item-container'],
                      navItem.path === window.location.pathname
                        ? styles['active-item']
                        : null,
                    )}
                  >
                    <Link
                      onClick={() => {
                        setActiveIcon(index);
                        navItem.onClick && navItem.onClick();
                      }}
                      to={navItem.path && navItem.path}
                      className={navItem.dropdown && 'pos-rel'}
                    >
                      <div className={styles['icon']}>
                        {index === activeIcon
                          ? navItem.activeIcon
                          : navItem.icon}
                      </div>

                      <div className={styles['title']}>
                        {navItem.title}
                      </div>

                      {navItem.dropdown && navItem.dropdown}
                    </Link>
                  </div>
                </li>
              );
            })}

            <li>
              <Link to="#">
                <button>
                  <span>Tweet</span>

                  <div className={styles['feather']}>
                    <FeatherIcon />
                  </div>
                </button>
              </Link>
            </li>
          </ul>

          <div
            onClick={() => setAccountDropdown(!accountDropdown)}
            className={cn(styles['account'], 'pos-rel')} // pos-rel = position: relative;
          >
            <Dropdown
              classNames="w300"
              items={[
                {
                  img: '/assets/img/ruzgar.JPG',
                  title: '@RuzgarAtaOzkan',
                },
                {
                  title: 'Add an existing account',
                  divider: true,
                },
                {
                  title: 'Log out @RuzgarAtaOzkan',
                  divider: true,
                },
              ]}
              active={accountDropdown}
              setActive={setAccountDropdown}
              pos="reverse-bottom"
              arrow
            />
            <img
              alt="Profile"
              onClick={() => setAccountDropdown(!accountDropdown)}
              src="/assets/img/ruzgar.JPG"
            />
            <div className={styles['info']}>
              <div className={styles['name']}>$</div>
              <div className={styles['username']}>
                @RuzgarAtaOzkan
              </div>
            </div>
            <div className={styles['more-options']}>
              <MoreIcon />
            </div>
          </div>
        </nav>
      </header>

      <Sidebar />
    </>
  );
}

export default Nav;
