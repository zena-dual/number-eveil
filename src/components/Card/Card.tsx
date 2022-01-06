import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
  cardId: number;
  cardName: string;
  onClick?: () => void;
}

export const Card = ({ cardId, cardName, onClick }: Props) => {
  if (onClick !== undefined) {
    return (
      <div className={styles['card-container']}>
        <button className={styles.card} onClick={onClick} type="button">
          <Image alt={cardName} className={styles.clickable} layout="fill" loading="lazy" src={`/img/${cardId}.jpeg`} />
        </button>
      </div>
    );
  }

  return (
    <div className={styles['card-container']}>
      <div className={styles.card}>
        <Image alt={cardName} layout="fill" loading="lazy" src={`/img/${cardId}.jpeg`} />
      </div>
    </div>
  );
};
