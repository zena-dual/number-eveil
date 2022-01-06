import { useEffect, useState } from 'react';
import { getUnitCandidates } from '../../helpers/getUnitCandidates';
import { NumberMonster, numberMonsters } from '../../helpers/numberMonsters';
import { Card } from '../Card';
import { Result } from '../Result';
import styles from './styles.module.css';

type SelectorType = 'image' | 'name';

export const Selector = () => {
  const [selectedId, setSelectedId] = useState(NaN);
  const [selectorType, setSelectorType] = useState<SelectorType>('name');
  const [unitCandidates, setUnitCandidates] = useState<NumberMonster[][]>([]);

  useEffect(() => {
    if (Number.isNaN(selectedId)) {
      setUnitCandidates([]);
      return;
    }

    setUnitCandidates(getUnitCandidates(selectedId));
  }, [selectedId]);

  const handleButtonClick = () => {
    setSelectedId(NaN);
    setSelectorType('name');
    setUnitCandidates([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles['button-container']}>
        <button onClick={handleButtonClick} type="button">
          リセットする
        </button>
      </div>

      <div className={styles['selector-container']}>
        <input
          checked={selectorType === 'name'}
          id="selector-type-name"
          name="selector-type"
          onChange={() => setSelectorType('name')}
          type="radio"
        />
        <label className={styles['selector-container-label']} htmlFor="selector-type-name">
          カード名から選ぶ
        </label>

        <input
          checked={selectorType === 'image'}
          id="selector-type-image"
          name="selector-type"
          onChange={() => setSelectorType('image')}
          type="radio"
        />
        <label className={styles['selector-container-label']} htmlFor="selector-type-image">
          画像から選ぶ
        </label>
      </div>

      {selectorType === 'name' && (
        <div className={styles['names-container']}>
          <select onChange={({ target }) => setSelectedId(Number(target.value))} value={selectedId || ''}>
            <option value="">カード名を選択</option>

            {numberMonsters.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectorType === 'image' && Number.isNaN(selectedId) && (
        <div className={styles['cards-container']}>
          {numberMonsters.map(({ id, name }) => (
            <div key={id} className={styles['card-container']}>
              <Card cardId={id} cardName={name} onClick={() => setSelectedId(id)} />
            </div>
          ))}
        </div>
      )}

      {!Number.isNaN(selectedId) && <Result selectedId={selectedId} unitCandidates={unitCandidates} />}
    </div>
  );
};
