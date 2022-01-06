import styles from './styles.module.css';

export const About = () => (
  <div className={styles.about}>
    <span>
      Created by&nbsp;
      <a
        className={styles['creator-twitter']}
        href="https://twitter.com/zena_dual"
        rel="noopener noreferrer"
        target="_blank"
      >
        @zena_dual
      </a>
    </span>

    <div className={styles['tweet-button-container']}>
      <a className="twitter-share-button" data-size="large" href="https://twitter.com/intent/tweet">
        Tweet
      </a>
    </div>
  </div>
);
