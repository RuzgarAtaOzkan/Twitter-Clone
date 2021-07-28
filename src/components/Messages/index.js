// MODULES
import React, { useState } from 'react';
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

  const [searchValue, setSearchValue] = useState('');
  const [persons, setPersons] = useState([
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
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>

        <div className={styles['persons']}>
          {persons.map((person, index) => {
            return (
              <div key={index} className={styles['person-section']}>
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
      <div className={styles['messages-area']}>messages</div>
    </>
  );
};

export default Messages;
