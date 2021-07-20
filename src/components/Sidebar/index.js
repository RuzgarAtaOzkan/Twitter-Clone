// MODULES
import React from 'react';
import cn from 'classnames';

// ICONS
import { GrClose } from 'react-icons/gr';
import { RiAddCircleLine } from 'react-icons/ri';
import { GiJusticeStar } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';
import { AiOutlineFileGif } from 'react-icons/ai';
import { ImParagraphLeft } from 'react-icons/im';
import { CgSmile } from 'react-icons/cg';
import { BiCalendar } from 'react-icons/bi';
import { FiMessageCircle } from 'react-icons/fi';
import { BiRecycle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
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

// STYLES
import styles from './Sidebar.module.scss';

function Sidebar() {
  const sidebarItems = [
    { icon: <ActivePersonIcon />, title: 'Profile' },
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

                    {item.img && <img src={item.img} />}
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
