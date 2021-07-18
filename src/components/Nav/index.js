import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

// STYLES
import styles from './Nav.module.scss';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <div>
                <FaTwitter />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <div>
                <FaTwitter />
              </div>

              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link>
              <div>
                <FaTwitter />
              </div>

              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link>
              <div>
                <FaTwitter />
              </div>

              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link>
              <div>
                <FaTwitter />
              </div>

              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link>
              <div>
                <FaTwitter />
              </div>

              <div>Home</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
