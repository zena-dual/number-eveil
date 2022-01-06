import { NumberMonster, numberMonsters } from '../../helpers/numberMonsters';
import { Card } from '../Card';
import styles from './styles.module.css';

interface Props {
  selectedId: number;
  unitCandidates: NumberMonster[][];
}

export const Result = ({ selectedId, unitCandidates }: Props) => {
  const selectedNumberMonster = numberMonsters.find(({ id }) => id === selectedId);
  if (selectedNumberMonster === undefined) {
    return null;
  }
  const { id, name } = selectedNumberMonster;

  return (
    <div className={styles['result-container']}>
      <div className={styles['result-text']}>
        {unitCandidates.length > 0
          ? `「${name}」を特殊召喚できる組み合わせは${unitCandidates.length}通り存在します。`
          : `「${name}」を特殊召喚できる組み合わせはありません。`}
      </div>

      <div className={styles['unit-candidate-container']}>
        {unitCandidates.map((unitCandidate, index) => (
          <div key={index} className={styles['unit-candidate']}>
            <Card cardId={id} cardName={name} clickable={false} />
            ＝
            <Card cardId={unitCandidate[0].id} cardName={unitCandidate[0].name} clickable={false} />
            ＋
            <Card cardId={unitCandidate[1].id} cardName={unitCandidate[1].name} clickable={false} />
            ＋
            <Card cardId={unitCandidate[2].id} cardName={unitCandidate[2].name} clickable={false} />
            ＋
            <Card cardId={unitCandidate[3].id} cardName={unitCandidate[3].name} clickable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};
