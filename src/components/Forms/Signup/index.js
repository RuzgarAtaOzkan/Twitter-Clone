// MODULES
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Input from './Input';

// CONFIG

// UTILS
import dates from '../../../utils/dates';
import title from '../../../utils/title';

// ICONS
import TwitterIcon from '../../Icons/Twitter';

// STYLES
import styles from './Signup.module.scss';

function Signup() {
  const [changeIntervalId, setChangeIntervalId] = useState(0);

  const types = {
    number: 'number',
    text: 'text',
    string: 'string',
  };

  const [data, setData] = useState({
    username: {
      title: 'Username',
      name: 'username',
      value: '',
      type: 'text',
      component: 'input',
      focused: false,
    },
    email: {
      title: 'Email',
      name: 'email',
      value: '',
      type: 'text',
      component: 'input',
      focused: false,
    },
    name: {
      title: 'Name',
      name: 'name',
      value: '',
      type: 'text',
      component: 'input',
      focused: false,
    },
    phone: {
      title: 'Phone',
      name: 'phone',
      value: '',
      type: 'number',
      component: 'input',
      error: '',
      focused: false,
    },
    day: {
      title: 'Day',
      name: 'day',
      value: '',
      type: 'number',
      component: 'select',
      focused: false,
      options: dates.getDays().map((current, index) => {
        return {
          value: current,
          id: index + 1,
          title: current,
        };
      }),
    },
    month: {
      title: 'Month',
      name: 'month',
      value: '',
      type: 'text',
      component: 'select',
      focused: false,
      options: dates.getMonths().map((current, index) => {
        return {
          value: current,
          id: index + 1,
          title: title(current),
        };
      }),
    },
    year: {
      title: 'Year',
      name: 'year',
      value: '',
      type: 'number',
      component: 'select',
      focused: false,
      options: dates.getYears(120).map((current, index) => {
        return {
          value: current,
          id: index + 1,
          title: current,
        };
      }),
    },
  });

  useEffect(() => {
    //console.log(data);
    return () => {};
  }, [data]);

  function handleChange(e) {
    const _data = { ...data };
    _data[e.target.name].value = e.target.value;

    clearInterval(changeIntervalId);

    const id = setTimeout(() => {
      for (const prop in _data) {
        if (_data[prop].value) {
          if (_data[prop].type === types.number) {
            if (isNaN(Number(_data[prop].value))) {
              _data[prop].error = 'Invalid number!';
            } else {
              _data[prop].error = '';
            }
          } else if (_data[prop].type === types.text) {
            if (!isNaN(Number(_data[prop].value))) {
              _data[prop].error = 'Invalid text!';
            } else {
              _data[prop].error = '';
            }
          }
        }
      }

      setData({ ..._data });
    }, 1500);

    setChangeIntervalId(id);

    setData({ ..._data });
  }

  return (
    <div
      onClick={(e) => {
        if (
          e.target.dataset.component !== 'input' &&
          e.target.dataset.component !== 'select'
        ) {
          const _data = { ...data };

          for (const prop in _data) {
            if (!_data[prop].value) {
              _data[prop].focused = false;
            }

            if (_data[prop].value) {
              if (_data[prop].type === types.number) {
                if (isNaN(Number(_data[prop].value))) {
                  _data[prop].error = 'Invalid number!';
                } else {
                  _data[prop].error = '';
                }
              } else if (_data[prop].type === types.text) {
                if (!isNaN(Number(_data[prop].value))) {
                  _data[prop].error = 'Invalid text!';
                } else {
                  _data[prop].error = '';
                }
              }
            }
          }

          setData({ ..._data });
        }
      }}
      className={styles['container']}
    >
      <div className={styles['header']}>
        <TwitterIcon />
      </div>

      <div className={styles['top-area']}>
        <h2>Create Your Account</h2>

        <Input
          setData={setData}
          data={data}
          info={data.username}
          onChange={handleChange}
        />

        <Input
          setData={setData}
          data={data}
          info={data.email}
          onChange={handleChange}
        />

        <Input
          setData={setData}
          data={data}
          info={data.name}
          onChange={handleChange}
        />

        <Input
          setData={setData}
          data={data}
          info={data.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles['bottom-area']}>
        <div className={styles['main-button']}>Sign up</div>

        <div className={styles['redirect-area']}>
          <span>Already have an account? </span>
          <Link to={'/signin'}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
