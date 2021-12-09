// MODULES
import React, { useState } from 'react';

// COMPONENTS
import AuthForm from '../components/AuthForm';

// CONFIG
import routesConfig from '../config/routes';

// ICONS
import TwitterIcon from '../components/Icons/Twitter';

function Signin() {
  const endpoints = { ...routesConfig.endpoints };

  const [formData, setFormData] = useState([
    {
      id: 1,
      title: 'Username or email',
      name: 'usernmae',
      value: '',
      placeholder: '@username',
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
      placeholder: '@username',
      component: 'input',
      type: 'password',
      section: 'password',
      focused: false,
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
        className="signin-page-section"
      >
        <div className="signin-page-section-left-area">
          <img
            src="/assets/img/twitter-wall.png"
            alt="Twitter Wall"
          />

          <div className="signin-page-section-twitter-icon-area">
            <TwitterIcon />
          </div>
        </div>

        <div className="signin-page-section-right-area">
          <AuthForm
            title="Enter your username and password"
            formData={formData}
            setFormData={setFormData}
            mainBtnTitle="Sign in"
            redirectTitle="Don't have an account?"
            redirectLinkTitle="Sign up"
            redirectPath={endpoints.signup}
          />
        </div>
      </section>
    </>
  );
}

export default Signin;
