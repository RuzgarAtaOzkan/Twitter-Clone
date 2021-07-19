import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

// STYLES
import styles from './Dropdown.module.scss';

function Dropdown({ items, active, setActive }) {
  const [dropdownPos, setDropdownPos] = useState('');
  const dropdownArea = useRef();

  function getDropdownPos() {
    if (dropdownArea.current) {
      const yPos = dropdownArea?.current?.getBoundingClientRect()?.y;

      // TODO
      if (yPos < 10) {
        //setDropdownPos('top');
      } else {
        //setDropdownPos('bottom');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('load', getDropdownPos);
    return () => {
      window.removeEventListener('load', getDropdownPos);
    };
  }, [dropdownArea, dropdownPos]);

  return active ? (
    <>
      <div
        ref={dropdownArea}
        className={cn(styles['dropdown-area'], styles[dropdownPos])}
      >
        {items?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.divider && <div className="dd-divider" />}
              <div className={styles['dropdown-item']}>
                <div className={styles['icon']}>{item.icon}</div>
                <div className={styles['title']}>{item.title}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  ) : null;
}

export default Dropdown;
