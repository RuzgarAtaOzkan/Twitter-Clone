// MODULES
import React from 'react';

// STYLES
import styles from './Select.module.scss';

function Select({ options }) {
  if (!options) {
    throw new Error('Too few arguments for Select components');
  }

  return (
    <>
      <select
        onChange={(e) => {
          console.log(Number(e.target.value));
        }}
        className={styles['select']}
      >
        {options?.map((current, index) => {
          return (
            <option
              value={current.value}
              key={current.id || index + 1}
            >
              {current.title}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
