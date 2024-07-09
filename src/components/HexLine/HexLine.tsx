import React, { useEffect, useState } from 'react';
import { Line } from '@utils/utils';

import styles from './Hexline.module.css';
import { MyReactRough } from '../IChingPage/IChingPage';
import { Rectangle } from 'rough-react-wrapper';

interface Props {
  line: Line;
}

const width = 200;
const height = 30;

export const HexLine = ({ line }: Props) => {
  const INITIAL_ROUGHNESS = 5;
  const [animatedRoughness, setAnimatedRoughness] = useState(INITIAL_ROUGHNESS);

  useEffect(() => {
    if ([Line.BrokenPlus, Line.StraightPlus].includes(line)) {
      const intervalId = setInterval(() => {
        setAnimatedRoughness(a =>
          a === INITIAL_ROUGHNESS ? a + 1 : INITIAL_ROUGHNESS
        );
      }, 200);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [line]);

  switch (line) {
    case Line.Broken:
      return <BrokenLine fill="black" roughness={4} />;
    case Line.BrokenPlus:
      return <BrokenLine fill="tomato" roughness={animatedRoughness} />;
    case Line.Straight:
      return <StraightLine fill="black" roughness={4} />;
    case Line.StraightPlus:
      return <StraightLine fill="tomato" roughness={animatedRoughness} />;
    default:
      return null;
  }
};

const BrokenLine = ({
  roughness,
  fill,
}: {
  roughness: number;
  fill: string;
}) => (
  <div className={styles.brokenContainer}>
    <div className={`${styles.brokenSegment} ${styles.brokenSegmentPlus}`}>
      <MyReactRough renderer={'svg'} width={width * 0.33} height={height}>
        <Rectangle
          width={width * 0.33}
          height={height}
          x={0}
          y={0}
          fill={fill}
          roughness={roughness}
          fillStyle="cross-hatch"
        />
      </MyReactRough>
    </div>
    <div className={`${styles.brokenSegment} ${styles.brokenSegmentPlus}`}>
      <MyReactRough renderer={'svg'} width={width * 0.33} height={height}>
        <Rectangle
          width={width * 0.33}
          height={height}
          x={0}
          y={0}
          fill={fill}
          roughness={roughness}
          fillStyle="cross-hatch"
        />
      </MyReactRough>
    </div>
  </div>
);

const StraightLine = ({
  roughness,
  fill,
}: {
  roughness: number;
  fill: string;
}) => (
  <div className={`${styles.straight} ${styles.straightPlus}`}>
    <MyReactRough renderer={'svg'} width={width} height={height}>
      <Rectangle
        width={width}
        height={height}
        x={0}
        y={0}
        fill={fill}
        roughness={roughness}
        fillStyle="cross-hatch"
      />
    </MyReactRough>
  </div>
);
