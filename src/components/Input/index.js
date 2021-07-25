// MODULES
import React from 'react';
import cn from 'classnames';

// ICONS
import SearchIcon from '../Icons/Search';

// STYLES
import styles from './Input.module.scss';

function Input({
  placeholder = '',
  value = '',
  onChange = (value) => {},
  classNames = '',
}) {
  return (
    <>
      <div className={cn(styles['input-area'], styles[classNames])}>
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
