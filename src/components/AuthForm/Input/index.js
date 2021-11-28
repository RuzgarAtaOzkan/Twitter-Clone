// MODULES
import React, { useState, useEffect } from 'react';
import cn from 'classnames';

// ICONS
import EyeIcon from '../../Icons/Eye';

// STYLES
import styles from './Input.module.scss';

function Input({
  id,
  formData,
  setFormData,
  onChange,
  value,
  placeholder,
  title,
  name,
  type,
  focused,
  component,
  section,
}) {
  const inputRef = React.useRef(null);
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      if (focused) {
        inputRef.current.focus();
      }
    }
    return () => {};
  }, [focused]);

  return (
    <div className={styles['container']}>
      <div
        onClick={(e) => {
          if (!value && !focused) {
            const newFormData = formData.map((current) => {
              if (current.id === id) {
                return {
                  ...current,
                  focused: true,
                };
              }

              if (!current.value) {
                return {
                  ...current,
                  focused: false,
                };
              }

              return current;
            });

            setFormData(newFormData);
          }
        }}
        className={cn(
          styles['left-area'],
          focused && styles['left-area-active'],
        )}
        data-element={component}
      >
        <div
          className={cn(
            styles['title'],
            focused && styles['title-passive'],
          )}
          data-element={component}
        >
          {title}
        </div>
        {focused ? (
          <input
            ref={inputRef}
            className={cn(focused && styles['input-active'])}
            onChange={onChange}
            value={value}
            name={name}
            type={showPwd ? 'text' : type}
            data-element={component}
          />
        ) : null}
      </div>

      <div className={styles['right-area']}>
        <div
          onClick={() => setShowPwd(!showPwd)}
          className={styles['icon-area']}
          data-icon="eye"
        >
          {section === 'password' ? (
            showPwd ? (
              <EyeIcon />
            ) : (
              <EyeIcon active />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Input;
