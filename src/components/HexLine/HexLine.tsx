import React, { useEffect, useState } from 'react';
import { Line } from '@utils/utils';

import styles from './Hexline.module.css';
import { MyReactRough } from '../IChingPage/IChingPage';
import { Rectangle } from 'rough-react-wrapper';

interface Props {
  line: Line;
  order: number;
}

const width = 200;
const height = 30;

const FILL_STYLE = 'none';

const INITIAL_ROUGHNESS = 2;

export const HexLine = ({ line, order }: Props) => {
  const [animatedRoughness, setAnimatedRoughness] = useState(INITIAL_ROUGHNESS);

  useEffect(() => {
    if ([Line.BrokenPlus, Line.StraightPlus].includes(line)) {
      let intervalId: NodeJS.Timeout;
      const timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          setAnimatedRoughness(a =>
            a === INITIAL_ROUGHNESS ? a + 1 : INITIAL_ROUGHNESS
          );
        }, 200);
      }, 6000);
      // const intervalId = setInterval(() => {
      //   setAnimatedRoughness(a =>
      //     a === INITIAL_ROUGHNESS ? a + 1 : INITIAL_ROUGHNESS
      //   );
      // }, 200);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [line]);

  switch (line) {
    case Line.Broken:
      return (
        <BrokenLine fill="black" roughness={INITIAL_ROUGHNESS} order={order} />
      );
    case Line.BrokenPlus:
      return (
        <BrokenLine
          fill="tomato"
          roughness={INITIAL_ROUGHNESS}
          order={order}
          className="changing"
        />
      );
    case Line.Straight:
      return (
        <StraightLine
          fill="black"
          roughness={INITIAL_ROUGHNESS}
          order={order}
        />
      );
    case Line.StraightPlus:
      return (
        <StraightLine
          fill="tomato"
          roughness={INITIAL_ROUGHNESS}
          order={order}
          className="changing"
        />
      );
    default:
      return null;
  }
};

const BrokenLine = ({
  roughness,
  fill,
  order,
  className,
}: {
  roughness: number;
  fill: string;
  order: number;
  className?: string;
}) => (
  <div
    className={`${styles.line__container} ${className}`}
    style={{ '--order': order } as React.CSSProperties}
  >
    <div className={`${styles.brokenSegment}  ${className ? className : ''}`}>
      <MyReactRough renderer={'svg'} width={width * 0.33} height={height}>
        <Rectangle
          width={width * 0.33}
          height={height}
          x={0}
          y={0}
          fill={fill}
          roughness={roughness}
          fillStyle={FILL_STYLE}
        />
      </MyReactRough>
    </div>
    <div className={`${styles.brokenSegment}  ${className ? className : ''}`}>
      <MyReactRough renderer={'svg'} width={width * 0.33} height={height}>
        <Rectangle
          width={width * 0.33}
          height={height}
          x={0}
          y={0}
          fill={fill}
          roughness={roughness}
          fillStyle={FILL_STYLE}
        />
      </MyReactRough>
    </div>
  </div>
);

const StraightLine = ({
  roughness,
  fill,
  order,
  className,
}: {
  roughness: number;
  fill: string;
  order: number;
  className?: string;
}) => (
  <div
    className={`${styles.line__container} ${className ? className : ''}`}
    style={{ '--order': order } as React.CSSProperties}
  >
    <MyReactRough renderer={'svg'} width={width} height={height}>
      <Rectangle
        width={width}
        height={height}
        x={0}
        y={0}
        fill={fill}
        roughness={roughness}
        fillStyle={FILL_STYLE}
      />
    </MyReactRough>
  </div>
);
