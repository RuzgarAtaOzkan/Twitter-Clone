// MODULES
import React from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { CgMoreO as MoreIcon } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';

// STYLES
import styles from './RecommendationBar.module.scss';

function RecommendationBar() {
  return (
    <>
      <div className={styles['recommendation-bar-area']}>
        <div className={styles['search-area']}>
          <div className={styles['input-area']}>
            <div className={styles['icon-area']}>
              <BiSearch />
            </div>

            <input placeholder="Search Twitter" />
          </div>
        </div>

        {window.location.pathname === '/explore' ? null : (
          <div className={styles['trends-area']}>
            <div className={styles['title-area']}>
              <div className={styles['title']}>Trends for you</div>

              <div className={styles['settings-icon']}>
                <FiSettings />
              </div>
            </div>

            <div className={styles['trend-section']}>
              <div className={styles['category']}>
                <div className={styles['trend-place']}>
                  Trending in Turkey
                </div>

                <div className={styles['trend-settings']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['trend-name']}>#acunilicali</div>
              <div className={styles['trend-count']}>
                37.9K Tweets
              </div>
            </div>

            <div className={styles['trend-section']}>
              <div className={styles['category']}>
                <div className={styles['trend-place']}>
                  Trending in Turkey
                </div>

                <div className={styles['trend-settings']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['trend-name']}>S-400</div>
              <div className={styles['trend-count']}>
                37.9K Tweets
              </div>
            </div>
            <div className={styles['trend-section']}>
              <div className={styles['category']}>
                <div className={styles['trend-place']}>
                  Trending in Turkey
                </div>

                <div className={styles['trend-settings']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['trend-name']}>Software</div>
              <div className={styles['trend-count']}>
                37.9K Tweets
              </div>
            </div>
            <div className={styles['trend-section']}>
              <div className={styles['category']}>
                <div className={styles['trend-place']}>
                  Trending in Turkey
                </div>

                <div className={styles['trend-settings']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['trend-name']}>#development</div>
              <div className={styles['trend-count']}>
                37.9K Tweets
              </div>
            </div>
            <div className={styles['trend-section']}>
              <div className={styles['category']}>
                <div className={styles['trend-place']}>
                  Trending in Turkey
                </div>

                <div className={styles['trend-settings']}>
                  <MoreIcon />
                </div>
              </div>

              <div className={styles['trend-name']}>#acunilicali</div>
              <div className={styles['trend-count']}>
                37.9K Tweets
              </div>
            </div>

            <div className={styles['show-more']}>
              <Link to="#">Show more</Link>
            </div>
          </div>
        )}

        <div className={styles['sticky-area']}>
          <div className={styles['follow-area']}>
            <div className={styles['title-area']}>
              <div className={styles['title']}>Who to follow</div>
            </div>

            <div className={styles['profile-section']}>
              <div className={styles['image-area']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['info-area']}>
                <div className={styles['name']}>Ruzgar Ata Ozkan</div>
                <div className={styles['username']}>
                  @RuzgarAtaOzkan
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
              </div>
            </div>
            <div className={styles['profile-section']}>
              <div className={styles['image-area']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['info-area']}>
                <div className={styles['name']}>Ruzgar Ata Ozkan</div>
                <div className={styles['username']}>
                  @RuzgarAtaOzkan
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
              </div>
            </div>
            <div className={styles['profile-section']}>
              <div className={styles['image-area']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['info-area']}>
                <div className={styles['name']}>Ruzgar Ata Ozkan</div>
                <div className={styles['username']}>
                  @RuzgarAtaOzkan
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
              </div>
            </div>

            <div className={styles['show-more']}>
              <Link to="#">Show more</Link>
            </div>
          </div>

          <div className={styles['topics-area']}>
            <div className={styles['title-area']}>
              <div className={styles['title']}>Who to follow</div>
            </div>

            <div className={styles['topics-section']}>
              <div className={styles['info-area']}>
                <div className={styles['category']}>Science</div>
                <div className={styles['topic']}>
                  All about science
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
                <GrClose />
              </div>
            </div>

            <div className={styles['topics-section']}>
              <div className={styles['info-area']}>
                <div className={styles['category']}>Science</div>
                <div className={styles['topic']}>
                  All about science
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
                <GrClose />
              </div>
            </div>

            <div className={styles['topics-section']}>
              <div className={styles['info-area']}>
                <div className={styles['category']}>Science</div>
                <div className={styles['topic']}>
                  All about science
                </div>
              </div>

              <div className={styles['button-area']}>
                <button>Follow</button>
                <GrClose />
              </div>
            </div>

            <div className={styles['show-more']}>
              <Link to="#">Show more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendationBar;
