'use client';

import styles from './IChingPage.module.css';

import { useState } from 'react';
import { Hexagram } from '@utils/utils';
import { Hex } from '@components/Hex/Hex';
import ReactRough, { Rectangle } from 'rough-react-wrapper';
import { useViewport } from '../../hooks/useViewport';

// Fix types for wrapper to accept children
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyReactRough = ReactRough as (props: any) => React.JSX.Element;

const IChingPage = () => {
  const [hexagram] = useState(new Hexagram());

  const { height, width } = useViewport();

  const changingHex = hexagram.getChangingHex();

  return (
    <main className={styles.iChingPageWrapper}>
      {height && width && (
        <div className={styles.background}>
          <MyReactRough renderer={'svg'} width={width} height={height}>
            <Rectangle
              width={width}
              height={height}
              x={0}
              y={0}
              fill="#d0d7de"
              roughness={3}
              stroke="none"
              hachureGap={64}
              fillStyle="zigzag"
            />
          </MyReactRough>
        </div>
      )}
      <section className={styles.hexContainer}>
        <Hex hexagram={hexagram} />

        {changingHex && <Hex hexagram={changingHex} />}
      </section>
      <section className={styles.textContainer}>
        {hexagram.hexagramNumber}. {hexagram.hexagramName}
        <br />
        <br />
        {hexagram.text}
        {changingHex ? (
          <>
            <br />
            <h1>LINES:</h1>{' '}
            <ul>
              {hexagram.changingLinesText.map(line => (
                <li key={line}>
                  {line}
                  <br />
                </li>
              ))}
            </ul>
          </>
        ) : (
          ''
        )}
        <br />
        <hr />
        {changingHex && (
          <>
            {changingHex.hexagramNumber}. {changingHex.hexagramName}
            <br />
            <br />
            {changingHex.text}
          </>
        )}
      </section>
    </main>
  );
};

export default IChingPage;
