import React from 'react';
import { Line } from '@utils/utils';

import styles from './Hexline.module.css';

interface Props {
  line: Line;
}

export const HexLine = ({ line }: Props) => {
  switch (line) {
    case Line.Broken:
      return (
        <div className={styles.brokenContainer}>
          <div className={styles.brokenSegment} />
          <div className={styles.brokenSegment} />
        </div>
      );
    case Line.BrokenPlus:
      return (
        <div className={styles.brokenContainer}>
          <div
            className={`${styles.brokenSegment} ${styles.brokenSegmentPlus}`}
          />
          <div
            className={`${styles.brokenSegment} ${styles.brokenSegmentPlus}`}
          />
        </div>
      );
    case Line.Straight:
      return <div className={styles.straight} />;
    case Line.StraightPlus:
      return <div className={`${styles.straight} ${styles.straightPlus}`} />;
    default:
      return null;
  }
};
