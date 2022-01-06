import styles from './styles.module.css';

interface Props {
  cardId: number;
  cardName: string;
  onClick?: () => void;
}

export const Card = ({ cardId, cardName, onClick }: Props) => {
  if (onClick !== undefined) {
    return (
      <button className={styles.card} onClick={onClick} type="button">
        <img
          alt={cardName}
          className={styles.clickable}
          loading="lazy"
          src={`https://storage.googleapis.com/ygoprodeck.com/pics/${cardId}.jpg`}
        />
      </button>
    );
  }

  return (
    <div className={styles.card}>
      <img alt={cardName} loading="lazy" src={`https://storage.googleapis.com/ygoprodeck.com/pics/${cardId}.jpg`} />
    </div>
  );
};
