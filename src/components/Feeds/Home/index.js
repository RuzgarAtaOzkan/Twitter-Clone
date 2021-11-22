// MODULES
import React from 'react';
import { useDispatch } from 'react-redux';

// ICONS
import ImageIcon from '../../Icons/Image';
import GifIcon from '../../Icons/Gif';
import GraphIcon from '../../Icons/Graph';
import SmileIcon from '../../Icons/Smile';
import CalendarIcon from '../../Icons/Calendar';
import MessageIcon from '../../Icons/Message';
import RetweetIcon from '../../Icons/Retweet';
import HeartIcon from '../../Icons/Heart';
import ShareIcon from '../../Icons/Share';
import WorldIcon from '../../Icons/World';
import StarIcon from '../../Icons/Star';

// DISPATCH ACTIONS
import { setSidebar } from '../../../state/global/actions';

// STYLES
import styles from './Home.module.scss';

function HomeFeed({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles['home-feed']}>
        <div className={styles['title']}>
          <div className={styles['profile-container']}>
            <div
              onClick={() => dispatch(setSidebar(true))}
              className={styles['image']}
            >
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
            <h1>Home {data.category}</h1>
          </div>
          <div className={styles['title-icon']}>
            <StarIcon />
          </div>
        </div>

        <div className={styles['tweet']}>
          <div className={styles['left-side']}>
            <img alt="Profile" src="/assets/img/ruzgar.JPG" />
          </div>

          <div className={styles['right-side']}>
            <textarea placeholder="What's happening ?" />

            <div className={styles['reply-options-area']}>
              <div className={styles['reply-options']}>
                <div className={styles['reply-icon']}>
                  <WorldIcon />
                </div>

                <div className={styles['reply-title']}>
                  Everyone can reply
                </div>
              </div>
            </div>

            <div className={styles['tweet-buttons']}>
              <div className={styles['media-buttons']}>
                <div>
                  <ImageIcon />
                </div>

                <div>
                  <GifIcon />
                </div>
                <div>
                  <GraphIcon />
                </div>
                <div>
                  <SmileIcon />
                </div>
                <div>
                  <CalendarIcon />
                </div>
              </div>

              <div className={styles['post-tweet-button']}>Tweet</div>
            </div>
          </div>
        </div>

        <div className={styles['posts-area']}>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
            <div className={styles['right-side']}>
              <div className={styles['info']}>
                <div className={styles['name']}>Ruzgar Ata Ozkan</div>
                <div className={styles['username']}>
                  @RuzgarAtaOzkan
                </div>
                .<div className={styles['time']}>14m</div>
              </div>

              <div className={styles['content']}>
                Kudos to SEC Commissioners Peirce and Roisman for
                speaking up the truth! Peirce & Roisman obviously knew
                beforehand that Ripple would take their letter to the
                Courts. —They are corageously standing vs. the
                "regulate-by-enforcement" policy pushed by the other
                three commissioners.
              </div>

              <div className={styles['media']}>
                <img alt="Profile" src="/assets/img/ruzgar.JPG" />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <MessageIcon />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <RetweetIcon />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <HeartIcon />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>

          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img alt="Profile" src="/assets/img/ruzgar.JPG" />
            </div>
            <div className={styles['right-side']}>
              <div className={styles['info']}>
                <div className={styles['name']}>Ruzgar Ata Ozkan</div>
                <div className={styles['username']}>
                  @RuzgarAtaOzkan
                </div>
                .<div className={styles['time']}>14m</div>
              </div>

              <div className={styles['content']}>
                Kudos to SEC Commissioners Peirce and Roisman for
                speaking up the truth! Peirce & Roisman obviously knew
                beforehand that Ripple would take their letter to the
                Courts. —They are corageously standing vs. the
                "regulate-by-enforcement" policy pushed by the other
                three commissioners.
              </div>

              <div className={styles['media']}>
                <source
                  type="video/mp4"
                  alt="Profile"
                  src="%PUBLIC_URL%/assets/video/video.mp4"
                />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <MessageIcon />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <RetweetIcon />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <HeartIcon />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFeed;
