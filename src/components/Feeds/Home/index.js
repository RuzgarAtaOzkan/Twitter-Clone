import React from 'react';

// ICONS
import { GiJusticeStar } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';
import { AiOutlineFileGif } from 'react-icons/ai';
import { ImParagraphLeft } from 'react-icons/im';
import { CgSmile } from 'react-icons/cg';
import { BiCalendar } from 'react-icons/bi';
import { FiMessageCircle } from 'react-icons/fi';
import { BiRecycle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

// STYLES
import styles from './Home.module.scss';

function HomeFeed() {
  return (
    <>
      <section className={styles['home-feed']}>
        <div className={styles['title']}>
          <div className={styles['profile-container']}>
            <div className={styles['image']}>
              <img src="/assets/img/ruzgar.JPG" />
            </div>
            <h1>Home</h1>
          </div>
          <div className={styles['title-icon']}>
            <GiJusticeStar />
          </div>
        </div>

        <div className={styles['tweet']}>
          <div className={styles['left-side']}>
            <img src="/assets/img/ruzgar.JPG" />
          </div>

          <div className={styles['right-side']}>
            <textarea placeholder="What's happening ?" />

            <div className={styles['reply-options-area']}>
              <div className={styles['reply-options']}>
                <div className={styles['reply-icon']}>
                  <BiWorld />
                </div>

                <div className={styles['reply-title']}>
                  Everyone can reply
                </div>
              </div>
            </div>

            <div className={styles['tweet-buttons']}>
              <div className={styles['media-buttons']}>
                <div>
                  <ImFilePicture />
                </div>

                <div>
                  <AiOutlineFileGif />
                </div>
                <div>
                  <ImParagraphLeft />
                </div>
                <div>
                  <CgSmile />
                </div>
                <div>
                  <BiCalendar />
                </div>
              </div>

              <div className={styles['post-tweet-button']}>Tweet</div>
            </div>
          </div>
        </div>

        <div className={styles['posts-area']}>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['post']}>
            <div className={styles['left-side']}>
              <img src="/assets/img/ruzgar.JPG" />
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
                <img />
              </div>

              <div className={styles['tweet-options']}>
                <div className={styles['tweet-option']}>
                  <FiMessageCircle />
                  <span>53</span>
                </div>
                <div className={styles['tweet-option']}>
                  <BiRecycle />
                  <span>12</span>
                </div>
                <div className={styles['tweet-option']}>
                  <AiOutlineHeart />
                  <span>32</span>
                </div>
                <div className={styles['tweet-option']}>
                  <FiDownload />
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
