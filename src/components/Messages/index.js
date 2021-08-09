// MODULES
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

// ICONS
import SettingsIcon from '../Icons/Settings';
import MailIcon from '../Icons/Mail';
import InfoIcon from '../Icons/Info';
import LeftArrowIcon from '../Icons/LeftArrow';

// COMPONENTS
import Input from '../Input';

// DISPATCH ACTIONS
import { setSidebar } from '../../state/global/actions';

// STYLES
import styles from './Messages.module.scss';

export const Messages = () => {
  const dispatch = useDispatch();

  const [choosenUser, setChoosenUser] = useState(null); // choosen username.
  const [messages] = useState([
    {
      from: 'you',
      type: 'post',
      content: 'If the Bishop moves forward, the Queen can take him.',
      media: '/assets/img/ruzgar.JPG',
      date: 1627829943208,
    },
    {
      from: 'friend',
      type: 'regular',
      content: 'If the Bishop moves forward, the Queen can take him.',
      date: 1627839943208,
    },
    {
      from: 'you',
      type: 'regular',
      content: 'If the Bishop moves forward, the Queen can take him.',
      date: 1627849943208,
    },
    {
      from: 'friend',
      type: 'post',
      content: 'If the Bishop moves forward, the Queen can take him.',
      media: '/assets/img/ruzgar.JPG',
      date: 1627859943208,
    },
    {
      from: 'you',
      type: 'post',
      content: 'If the Bishop moves forward, the Queen can take him.',
      media: '/assets/img/ruzgar.JPG',
      date: 1627869943208,
    },
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [persons] = useState([
    {
      name: 'Ruzgar Ata Ozkan',
      username: '@RuzgarAtaOzkan',
      date: 'jul 13',
      img: '/assets/img/ruzgar.JPG',
    },
    {
      name: 'Erce Kaan Sazli',
      username: '@ErceKaanSazli',
      date: 'april 3',
      img: '/assets/img/erce.jpg',
    },
    {
      name: 'Nisan Gurol',
      username: '@NisanGurol',
      date: 'jul 16',
      img: '/assets/img/nisan.jpg',
    },
    {
      name: 'Basar Ballioz',
      username: '@basarballioz',
      date: 'sep 30',
      img: '/assets/img/basar.jpg',
    },
  ]);

  return (
    <>
      <div
        className={cn(
          styles['persons-area'],
          choosenUser ? styles['inactive'] : null,
        )}
      >
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
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>

        <div className={styles['persons']}>
          {persons.map((person, index) => {
            return (
              <div
                onClick={() => setChoosenUser(person.username)}
                key={index}
                className={styles['person-section']}
              >
                <div className={styles['person-box-left-area']}>
                  <img alt="Profile" src={person.img} />
                  <div className={styles['person-box-info']}>
                    <div className={styles['person-box-name']}>
                      {person.name}
                    </div>
                    <div className={styles['person-box-username']}>
                      {person.username}
                    </div>
                  </div>
                </div>
                <div className={styles['person-box-right-area']}>
                  <div className={styles['date']}>{person.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          styles['messages-area'],
          choosenUser ? null : styles['inactive'],
        )}
      >
        {choosenUser ? (
          <>
            <div className={styles['messages-title']}>
              <div className={styles['left-area']}>
                <div
                  onClick={() => {
                    setChoosenUser(null);
                  }}
                  className={styles['left-arrow-icon']}
                >
                  <LeftArrowIcon />
                </div>

                <div className={styles['image']}>
                  <img alt="Profile" src="/assets/img/basar.jpg" />
                </div>
                <div className={styles['info-area']}>
                  <div className={styles['name']}>Basar</div>
                  <div className={styles['username']}>
                    @basarballioz
                  </div>
                </div>
              </div>
              <div className={styles['right-area']}>
                <InfoIcon />
              </div>
            </div>

            <div className={styles['messages']}>
              {messages.map((message, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      styles['message'],
                      styles[message.from],
                    )}
                  >
                    <div className={styles['image']}>
                      <img
                        src="/assets/img/basar.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div className={styles[message.type]}>
                      {message.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className={styles['start-conversation-area']}>
              <div className={styles['start-conversation-title']}>
                You don’t have a message selected
              </div>
              <div className={styles['start-conversation-subtitle']}>
                Choose one from your existing messages, or start a new
                one.
              </div>
              <button onClick={() => {}}>New message</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Messages;
