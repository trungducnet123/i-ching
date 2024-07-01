'use client';
import styles from './IChingPage.module.css';

import { Component } from 'react';
import { Hexagram } from '../../utils/utils';
import Hex from '../Hex';
import {
  HexContainer,
  IChingPageWrapper,
  TextContainer,
} from './IChingPage.css';

interface State {
  hexagram: Hexagram;
  changingHex: Hexagram | null;
}

class IChingPage extends Component<any, State> {
  constructor(props: any) {
    super(props);

    const hex = new Hexagram();

    this.state = {
      hexagram: hex,
      changingHex: hex.getChangingHex(),
    };
  }

  render() {
    const { hexagram, changingHex } = this.state;

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
  }
}

export default IChingPage;
