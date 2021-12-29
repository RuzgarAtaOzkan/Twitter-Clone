// MODULES
import React, { useState } from 'react';

// API
import request from '../api/request';

// COMPONENTS
import SignupForm from '../components/Forms/Signup';

// ICONS
import TwitterIcon from '../components/Icons/Twitter';

// UTILS
import dates from '../utils/dates';
import title from '../utils/title';

function Signup() {
  const [formData, setFormData] = useState([
    {
      id: 1,
      title: 'Name',
      name: 'name',
      value: '',
      component: 'input',
      type: 'text',
      section: 'text',
      focused: false,
    },
    {
      id: 2,
      title: 'Phone',
      name: 'phone',
      value: '',
      component: 'input',
      type: 'number',
      section: 'number',
      focused: false,
    },
    {
      id: 3,
      title: 'Day',
      name: 'day',
      value: '',
      type: 'number',
      component: 'select',
      section: 'number',
      focused: false,
      options: dates.getDays().map((current, index) => {
        return {
          value: index + 1,
          id: index + 1,
          title: current,
        };
      }),
    },
    {
      id: 4,
      title: 'Month',
      name: 'month',
      value: '',
      type: 'text',
      component: 'select',
      section: 'text',
      focused: false,
      options: dates.getMonths().map((current, index) => {
        return {
          value: index + 1,
          id: index + 1,
          title: title(current),
        };
      }),
    },
    {
      id: 5,
      title: 'Year',
      name: 'year',
      value: '',
      type: 'number',
      component: 'select',
      section: 'number',
      focused: false,
      options: dates.getYears().map((current, index) => {
        return {
          value: index + 1,
          id: index + 1,
          title: current,
        };
      }),
    },
  ]);

  return (
    <>
      <section
        onClick={(e) => {
          //console.log(e.target.parent);
          if (
            e.target.dataset.element !== 'input' &&
            e.target.dataset.element !== 'select'
          ) {
            const newFormData = formData.map((c, i) => {
              if (!c.value) {
                return {
                  ...c,
                  focused: false,
                };
              }

              return c;
            });

            setFormData(newFormData);
          }
        }}
        className="signup-page-section"
      >
        <div className="signup-page-section-left-area">
          <img
            src="/assets/img/twitter-wall.png"
            alt="Twitter Wall"
          />

          <div className="signup-page-section-twitter-icon-area">
            <TwitterIcon />
          </div>
        </div>

        <div className="signup-page-section-right-area">
          <SignupForm />
        </div>
      </section>
    </>
  );
}

export default Signup;
