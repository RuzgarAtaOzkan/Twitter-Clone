// MODULES
import React, { useState } from 'react';

// COMPONENTS
import AuthForm from '../components/AuthForm';

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
      type: 'string',
    },
    {
      id: 2,
      title: 'Phone',
      name: 'phone',
      value: '',
      component: 'input',
      type: 'number',
    },
    {
      id: 3,
      title: 'Day',
      name: 'day',
      value: '',
      type: 'number',
      component: 'select',
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
      type: 'string',
      component: 'select',
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
      <AuthForm
        title="Create Your Account"
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}

export default Signup;
