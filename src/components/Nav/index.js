import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

// ICONS
import { GiFeather } from 'react-icons/gi';
import {
  FaTwitter as TwitterIcon,
  FaHashtag as ActiveHashtagIcon,
} from 'react-icons/fa';
import { BiHomeCircle as HomeIcon } from 'react-icons/bi';
import { RiHome7Fill as ActiveHomeIcon } from 'react-icons/ri';
import {
  BsBell as BellIcon,
  BsBellFill as ActiveBellIcon,
} from 'react-icons/bs';

import {
  MdMailOutline as MailIcon,
  MdEmail as ActiveMailIcon,
} from 'react-icons/md';

import {
  BsFillBookmarkFill as ActiveBookmarkIcon,
  BsBookmark as BookmarkIcon,
} from 'react-icons/bs';

import {
  RiFileList2Line as ListIcon,
  RiFileList2Fill as ActiveListIcon,
} from 'react-icons/ri';
import { IoPersonOutline as PersonIcon } from 'react-icons/io';
import { BsPersonFill as ActivePersonIcon } from 'react-icons/bs';
import { CgMoreO as MoreIcon } from 'react-icons/cg';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { BiConversation } from 'react-icons/bi';
import { GrArticle } from 'react-icons/gr';
import { RiAdvertisementLine, RiBrushLine } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

// COMPONENTS
import Dropdown from '../Dropdown';

// STYLES
import styles from './Nav.module.scss';

function Nav() {
  const [activeIcon, setActiveIcon] = useState(-1);
  const [moreOptionsDropdown, setMoreOptionsDropdown] =
    useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const navItems = [
    {
      activeIcon: <ActiveHomeIcon />,
      icon: <HomeIcon />,
      title: 'Home',
      path: '/home',
    },
    {
      activeIcon: <ActiveHashtagIcon />,
      icon: <ActiveHashtagIcon />,
      title: 'Explore',
      path: '/explore',
    },
    {
      activeIcon: <ActiveBellIcon />,
      icon: <BellIcon />,
      title: 'Notifications',
      path: '/notifications',
    },
    {
      activeIcon: <ActiveMailIcon />,
      icon: <MailIcon />,
      title: 'Messages',
      path: '/messages',
    },
    {
      activeIcon: <ActiveBookmarkIcon />,
      icon: <BookmarkIcon />,
      title: 'Bookmarks',
      path: '/bookmarks',
    },
    {
      activeIcon: <ActiveListIcon />,
      icon: <ListIcon />,
      title: 'Lists',
      path: '/lists',
    },
    {
      activeIcon: <ActiveHomeIcon />,
      icon: <ActivePersonIcon />,
      title: 'Profile',
      path: '/profile',
    },
    {
      dropdown: (
        <Dropdown
          items={[
            {
              icon: <BiConversation />,
              title: 'Topics',
            },
            {
              icon: <HiOutlineLightningBolt />,
              title: 'Moments',
            },
            {
              icon: <GrArticle />,
              title: 'Newsletters',
            },
            {
              icon: <RiAdvertisementLine />,
              title: 'Twitter Ads',
            },
            {
              icon: <GoGraph />,
              title: 'Analytics',
            },
            {
              icon: <FiSettings />,
              title: 'Settings and Privacy',
              divider: true,
            },
            {
              icon: <BsQuestionCircle />,
              title: 'Help Center',
            },
            {
              icon: <RiBrushLine />,
              title: 'Display',
            },
          ]}
          active={moreOptionsDropdown}
          setActive={setMoreOptionsDropdown}
        />
      ),
      activeIcon: <MoreIcon />,
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
                      index === activeIcon
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
              <Link>
                <button>
                  <span>Tweet</span>

                  <div className={styles['feather']}>
                    <GiFeather />
                  </div>
                </button>
              </Link>
            </li>
          </ul>

          <div
            onClick={() => setAccountDropdown(!accountDropdown)}
            className={cn(styles['account'], 'pos-rel')}
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
    </>
  );
}

export default Nav;
