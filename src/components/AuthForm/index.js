// MODULES
import React from 'react';

// COMPONENTS
import Select from '../Select';
import Input from '../AuthForm/Input';

// ICONS
import TwitterIcon from '../Icons/Twitter';

// STYLES
import styles from './AuthForm.module.scss';

function AuthForm({ formData, setFormData, title, mainBtnTitle }) {
  if (!formData || !setFormData) {
    throw new Error('Too few arguments for AuthForm.js');
  }

  if (typeof formData !== 'object') {
    throw new Error('Invalid type for data in AuthForm.js');
  }

  const components = {
    input: 'input',
    select: 'select',
  };

  function handleChange(e) {
    const newFormData = formData.map((current) => {
      if (current.name === e.target.name) {
        return {
          ...current,
          value: e.target.value,
        };
      }

      return current;
    });

    setFormData(newFormData);
  }

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <TwitterIcon />
      </div>

      <div className={styles['top-area']}>
        <h2>{title}</h2>

        {formData.map((input, index) => {
          if (input.component === components.input) {
            return (
              <div
                key={input.id || index + 1}
                className={styles['input-container']}
              >
                <Input
                  id={input.id}
                  onChange={handleChange}
                  formData={formData}
                  setFormData={setFormData}
                  value={input.value}
                  title={input.title}
                  name={input.name}
                  type={input.type}
                  focused={input.focused}
                  component={input.component}
                />
              </div>
            );
          }

          if (input.component === components.select) {
            return (
              <div
                key={input.id}
                className={styles['select-container']}
              >
                {input.title}
                <Select options={input.options || []} />
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className={styles['bottom-area']}>
        <div className={styles['main-button']}>{mainBtnTitle}</div>
      </div>
    </div>
  );
}

export default AuthForm;
