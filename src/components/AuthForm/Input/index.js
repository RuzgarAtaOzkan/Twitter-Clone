// MODULES
import React, { useState, useEffect } from 'react';
import cn from 'classnames';

// STYLES
import styles from './Input.module.scss';

function Input({
  id,
  formData,
  setFormData,
  onChange,
  value,
  title,
  name,
  type,
  focused,
  component,
}) {
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      if (focused) {
        inputRef.current.focus();
      }
    }
    return () => {};
  }, [focused]);

  return (
    <div
      onClick={() => {
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
      className={styles['container']}
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
          type={type}
          data-element={component}
        />
      ) : null}
    </div>
  );
}

export default Input;
