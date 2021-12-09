// MODULES
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

function configureDBMessages(dbMessages, currentUser) {
  if (!dbMessages || !currentUser) {
    throw new Error(
      'Too few arguments specified for configureMessages',
    );
  }

  if (typeof dbMessages !== 'object' || !Array.isArray(dbMessages)) {
    throw new Error(
      'Invalid typeof dbMessages for configureDBMessages',
    );
  }

  if (typeof currentUser !== 'object') {
    throw new Error(
      'Invalid typeof currentUser for configureDBMessages',
    );
  }

  const senderTypes = {
    you: 'you',
    recipient: 'recipient',
  };

  const messageTypes = {
    post: 'post',
    standart: 'standart',
  };

  const messages = dbMessages.map((currentMsg, index) => {
    return {
      from:
        currentUser.username.toLowerCase() ===
        currentMsg.sender.username.toLowerCase()
          ? senderTypes.you
          : senderTypes.recipient,
      type: currentMsg.media
        ? messageTypes.post
        : messageTypes.standart,
      content: currentMsg.text,
      media: currentMsg.media,
      date: currentMsg.createdAt,
    };
  });

  // Mapped message objects for UI.
  return messages;
}

function configureDBPersons(dbPersons) {
  if (!dbPersons) {
    throw new Error(
      'Too few arguments specified for configureMessages',
    );
  }

  if (typeof dbPersons !== 'object' || !Array.isArray(dbPersons)) {
    throw new Error('Invalid typeof dbPersons for congiureDBPersons');
  }

  const persons = dbPersons.map((currentPerson, index) => {
    return {
      name: currentPerson.name,
      username: currentPerson.username,
      date: currentPerson.createdAt,
      img: currentPerson.img,
    };
  });

  // Mapped person objects for UI.
  return persons;
}

export const Messages = ({ dbMessages = [], dbPersons = [] }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  const [choosenUser, setChoosenUser] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const clientMessages = configureDBMessages(
      dbMessages,
      currentUser,
    );

    const clientPersons = configureDBPersons(dbPersons);

    setMessages(clientMessages);
    setPersons(clientPersons);
    return () => {};
  }, []);

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
                onClick={() => setChoosenUser(person)}
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
                  <img alt="Profile" src={choosenUser.img} />
                </div>
                <div className={styles['info-area']}>
                  <div className={styles['name']}>
                    {choosenUser.name}
                  </div>
                  <div className={styles['username']}>
                    {choosenUser.username}
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
                    <div className={styles['left-area']}>
                      <div className={styles['image']}>
                        <img src={choosenUser.img} alt="Profile" />
                      </div>
                    </div>
                    <div className={styles['right-area']}>
                      <div
                        className={cn(
                          styles['content'],
                          styles[message.type],
                        )}
                      >
                        {message.content}
                      </div>
                      <div className={styles['date']}>
                        {message.date}
                      </div>
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
