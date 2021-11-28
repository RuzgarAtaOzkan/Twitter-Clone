// MODULES
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

// DISPATCH TYPES
import gloabReducerTypes from '../../../state/global/types';

// ICONS
import HomeIcon from '../../Icons/Home';
import BellIcon from '../../Icons/Bell';
import MailIcon from '../../Icons/Mail';
import SearchIcon from '../../Icons/Search';

// STYLES
import styles from './BottomBar.module.scss';

function BottomBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [activeIcon, setActiveIcon] = useState(-1);
  const [pathname, setPathname] = useState(window.location.pathname);

  const bottomBarItems = [
    {
      activeIcon: <HomeIcon active />,
      icon: <HomeIcon />,
      path: '/home',
    },
    {
      activeIcon: <SearchIcon active />,
      icon: <SearchIcon />,
      path: '/explore',
    },
    {
      activeIcon: <BellIcon active />,
      icon: <BellIcon />,
      path: '/notifications',
    },
    {
      activeIcon: <MailIcon active />,
      icon: <MailIcon />,
      path: '/messages',
    },
  ];

  function onResize(e) {
    setPathname(window.location.pathname);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    auth.authenticated && (
      <nav>
        <div className={styles['bottom-bar-area']}>
          {bottomBarItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveIcon(index);
                  setPathname(window.location.pathname);
                  dispatch({
                    type: gloabReducerTypes.SET_SIDEBAR,
                    payload: false,
                  });
                }}
                className={cn(
                  styles['icon-area'],
                  index === activeIcon || item.path === pathname
                    ? styles['active-icon']
                    : null,
                )}
              >
                <Link to={item.path}>
                  {index === activeIcon || item.path === pathname
                    ? item.activeIcon
                    : item.icon}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    )
  );
}

export default BottomBar;
