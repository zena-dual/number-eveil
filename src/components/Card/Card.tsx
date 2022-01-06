import styles from './styles.module.css';

interface Props {
  cardId: number;
  cardName: string;
  clickable: boolean;
  onClick?: () => void;
}

export const Card = ({ cardId, cardName, clickable, onClick }: Props) => (
  <div className={styles.card}>
    <img
      alt={cardName}
      className={clickable ? styles.clickable : ''}
      loading="lazy"
      onClick={onClick}
      src={`/img/${cardId}.jpeg`}
    />
  </div>
);
