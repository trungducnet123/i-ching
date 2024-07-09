import { Hexagram, Line } from '@utils/utils';
import { HexLine } from '../HexLine/HexLine';
import styles from './Hex.module.css';

interface Props {
  hexagram: Hexagram;
}

export const Hex = ({ hexagram }: Props) => (
  <div>
    <h1
      className={styles.title}
    >{`${hexagram.hexagramNumber}: ${hexagram.hexagramName}`}</h1>

    {hexagram.getLinesDescending().map((line: Line, i: number) => (
      <HexLine line={line} key={hexagram.hexagramNumber + i} />
    ))}
  </div>
);
