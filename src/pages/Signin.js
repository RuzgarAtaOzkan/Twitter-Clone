// MODULES
import React, { useState, useEffect } from 'react';

// COMPONENTS
import AuthForm from '../components/AuthForm';

// ICONS
import TwitterIconPath from '../components/Icons/Twitter.svg';

function Signin() {
  const [formData, setFormData] = useState([
    {
      id: 1,
      title: 'Username',
      name: 'usernmae',
      value: '',
      component: 'input',
      type: 'text',
      section: 'text',
      focused: false,
    },
    {
      id: 2,
      title: 'Password',
      name: 'password',
      value: '',
      component: 'input',
      type: 'password',
      section: 'password',
      focused: false,
    },
  ]);

  useEffect(() => {
    //console.log(formData);
    return () => {};
  }, [formData]);

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
        className="signin-page-section"
      >
        <div className="signin-page-section-left-area">
          <img
            src="/assets/img/twitter-wall.png"
            alt="Twitter Wall"
          />

          <img
            className="signin-page-section-twitter-icon"
            src={TwitterIconPath}
            alt="Twitter Icon"
          />
        </div>

        <div className="signin-page-section-right-area">
          <AuthForm
            title="Enter your username and password"
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </section>
    </>
  );
}

export default Signin;
