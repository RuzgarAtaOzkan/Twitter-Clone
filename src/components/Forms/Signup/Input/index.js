// MODULES
import React, { useEffect } from 'react';
import cn from 'classnames';

// STYLES
import styles from './Input.module.scss';

function Input({ setData, data, info, onChange }) {
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (inputRef.current && info.focused) {
      inputRef.current.focus();
    }
    return () => {};
  }, [info.focused]);

  return (
    <div
      data-component={info.component}
      className={cn(styles['container'])}
      onClick={(e) => {
        if (!info.focused) {
          const newDataProp = { ...data };
          newDataProp[info.name].focused = true;
          setData({ ...newDataProp });
        }

        const _data = { ...data };

        for (const prop in _data) {
          if (!_data[prop].value && _data[prop].name !== info.name) {
            _data[prop].focused = false;
          }
        }

        setData({ ..._data });
      }}
    >
      <div
        className={cn(
          styles['left-area'],
          info.focused && styles['left-area-active'],
          info.error && styles['left-area-error'],
        )}
        data-component={info.component}
      >
        <div
          className={cn(
            styles['title'],
            info.focused && styles['title-passive'],
          )}
          data-component={info.component}
        >
          {info.title}
        </div>
        {info.focused ? (
          <>
            <input
              autoComplete="off"
              ref={inputRef}
              className={cn(info.focused && styles['input-active'])}
              onChange={onChange}
              value={info.value}
              name={info.name}
              data-component={info.component}
            />
          </>
        ) : null}
      </div>

      <div className={styles['error-message-area']}>{info.error}</div>
    </div>
  );
}

export default Input;
