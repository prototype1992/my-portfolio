import * as React from 'react';

const styles = require('./preloader.scss');

console.info(styles);

export default class Preloader extends React.Component < any, any > {
  public render () {
    return (
      <div className={styles.preloader}>
        <div className={styles.preloader__spinner}>
          <div className={styles.preloader__percents}>0%</div>
        </div>
      </div>
    );
  }
}
