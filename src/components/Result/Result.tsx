import { NumberMonster, numberMonsters } from '../../helpers/numberMonsters';
import { Card } from '../Card';
import styles from './styles.module.css';

interface Props {
  fixedId: number | undefined;
  selectedId: number;
  unitCandidates: NumberMonster[][];
}

export const Result = ({ fixedId, selectedId, unitCandidates }: Props) => {
  const selectedNumberMonster = numberMonsters.find(({ id }) => id === selectedId);
  if (selectedNumberMonster === undefined) {
    return null;
  }

  const { name } = selectedNumberMonster;
  const fixedNumberMonster = numberMonsters.find(({ id }) => id === fixedId);

  if (unitCandidates.length === 0) {
    return (
      <div className={styles['result-container']}>
        <div className={styles['result-text']}>
          {fixedNumberMonster !== undefined && (
            <>
              {`「${fixedNumberMonster.name}」を素材として`}
              <br />
            </>
          )}

          {`「${name}」を特殊召喚できる組み合わせはありません。`}
        </div>
      </div>
    );
  }

  return (
    <div className={styles['result-container']}>
      <div className={styles['result-text']}>
        {fixedNumberMonster !== undefined && (
          <>
            {`「${fixedNumberMonster.name}」を素材として`}
            <br />
          </>
        )}

        {`「${name}」を特殊召喚できる組み合わせは${unitCandidates.length}通り存在します。`}
      </div>

      <div className={styles['unit-candidate-container']}>
        {unitCandidates.map((unitCandidate) => (
          <div key={unitCandidate.map(({ id }) => `${id}`).join('-')} className={styles['unit-candidate']}>
            <Card cardId={selectedNumberMonster.id} cardName={name} />
            ＝
            <Card cardId={unitCandidate[0].id} cardName={unitCandidate[0].name} />
            ＋
            <Card cardId={unitCandidate[1].id} cardName={unitCandidate[1].name} />
            ＋
            <Card cardId={unitCandidate[2].id} cardName={unitCandidate[2].name} />
            ＋
            <Card cardId={unitCandidate[3].id} cardName={unitCandidate[3].name} />
          </div>
        ))}
      </div>
    </div>
  );
};
