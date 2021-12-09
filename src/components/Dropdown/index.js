import React, { useRef } from 'react';
import cn from 'classnames';

import { RiArrowDropDownFill } from 'react-icons/ri';

// STYLES
import styles from './Dropdown.module.scss';

function Dropdown({
  items = [],
  active = false,
  setActive = () => {},
  classNames,
  arrow,
}) {
  const dropdownArea = useRef();

  return active ? (
    <>
      <div
        onClick={() => {
          setActive(false);
        }}
        className={styles['background']}
      ></div>
      <div
        onClick={() => setActive(false)}
        ref={dropdownArea}
        className={cn(styles['dropdown-area'])}
      >
        {items?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.divider && <div className="dd-divider" />}
              <div
                className={cn(styles['dropdown-item'], classNames)}
                onClick={item.onClick ? item.onClick : null}
              >
                {item.icon && (
                  <div className={styles['icon']}>{item.icon}</div>
                )}

                {item.img && <img alt={item.title} src={item.img} />}
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
