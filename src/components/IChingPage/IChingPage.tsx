'use client';

import styles from './IChingPage.module.css';

import { useState } from 'react';
import { Hexagram } from '@utils/utils';
import { Hex } from '@components/Hex/Hex';

const IChingPage = () => {
  const [hexagram] = useState(new Hexagram());

  const changingHex = hexagram.getChangingHex();

  return (
    <main className={styles.IChingPageWrapper}>
      <section className={styles.HexContainer}>
        <Hex hexagram={hexagram} />

        {changingHex && <Hex hexagram={changingHex} />}
      </section>
      <section className={styles.TextContainer}>
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
