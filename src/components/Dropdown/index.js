import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { RiArrowDropDownFill } from 'react-icons/ri';

// STYLES
import styles from './Dropdown.module.scss';

function Dropdown({
  items,
  active,
  setActive,
  pos,
  classNames,
  arrow,
}) {
  const [dropdownPos] = useState('');
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
        className={cn(
          styles['dropdown-area'],
          styles[dropdownPos],
          pos && styles[pos],
        )}
      >
        {items?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.divider && <div className="dd-divider" />}
              <div
                className={cn(styles['dropdown-item'], classNames)}
              >
                {item.icon && (
                  <div className={styles['icon']}>{item.icon}</div>
                )}

                {item.img && <img alt="" src={item.img} />}
                <div className={cn(item.icon && styles['title'])}>
                  {item.title}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {arrow && (
          <div className={styles['arrow']}>
            <RiArrowDropDownFill />
          </div>
        )}
      </div>
    </>
  ) : null;
}

export default Dropdown;
