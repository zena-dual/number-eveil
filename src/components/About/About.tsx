import styles from './styles.module.css';

export const About = () => (
  <div className={styles.about}>
    <div className={styles['tweet-button-container']}>
      <a className="twitter-share-button" data-size="large" href="https://twitter.com/intent/tweet">
        Tweet
      </a>
    </div>
  </div>
);
