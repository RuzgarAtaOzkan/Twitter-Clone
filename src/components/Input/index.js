// MODULES
import React from 'react';

// ICONS
import SearchIcon from '../Icons/Search';

// STYLES
import styles from './Input.module.scss';

function Input({
  placeholder = '',
  value = '',
  onChange = (value) => {},
}) {
  return (
    <>
      <div className={styles['input-area']}>
        <SearchIcon />

        <input
          placeholder={placeholder}
          value={value ? value : null}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default Input;
