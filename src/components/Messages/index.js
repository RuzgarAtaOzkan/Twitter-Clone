// MODULES
import React from 'react';
import { useDispatch } from 'react-redux';

// ICONS
import SettingsIcon from '../Icons/Settings';
import MailIcon from '../Icons/Mail';

// COMPONENTS
import Input from '../Input';

// DISPATCH ACTIONS
import { setSidebar } from '../../state/global/actions';

// STYLES
import styles from './Messages.module.scss';

export const Messages = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles['persons-area']}>
        <div className={styles['persons-title']}>
          <div className={styles['left-area']}>
            <div
              onClick={() => dispatch(setSidebar(true))}
              className={styles['image']}
            >
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
            <h3>Messages</h3>
          </div>
          <div className={styles['right-area']}>
            <SettingsIcon />
            <MailIcon />
          </div>
        </div>

        <div className={styles['persons-search-area']}>
          <Input
            classNames="p8-12"
            placeholder="Search for people and groups"
          />
        </div>

        <div className={styles['messages-area']}>
          <div className={styles['message-section']}>
            <div className={styles['message-box-left-area']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              <div className={styles['message-box-info']}>
                <div className={styles['message-box-name']}>
                  Ruzgar Ata Ozkan
                </div>
                <div className={styles['message-box-surname']}>
                  @RuzgarAtaOzkan
                </div>
              </div>
            </div>
            <div className={styles['message-box-right-area']}>
              <div className={styles['date']}>jul 13</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['messages-area']}>messages</div>
    </>
  );
};

export default Messages;
