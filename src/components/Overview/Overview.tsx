import { Card } from '../Card';
import styles from './styles.module.css';

export const Overview = () => (
  <div className={styles.overview}>
    <Card cardId={20994205} cardName="ナンバーズ・エヴァイユ" />

    <div className={styles['overview-text']}>
      ①：EXデッキから特殊召喚されたモンスターが相手フィールドにのみ存在する場合に発動できる。EXデッキから「No.」Xモンスター４体を選ぶ（同じランクは１体まで）。「No.」の数値がその４体の合計と同じとなる、「No.」Xモンスター１体をX召喚扱いとしてEXデッキから特殊召喚し、選んだモンスターを全てそのモンスターの下に重ねてX素材とする。この効果で特殊召喚したモンスターが自分フィールドに表側表示で存在する限り、自分は「No.」Xモンスターしか特殊召喚できない。
    </div>
  </div>
);
