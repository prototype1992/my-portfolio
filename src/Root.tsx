import * as React from 'react';

const styles = require('./styles/main.scss');

// Компоненты
import UserBlock from './components/userblock/index';

// import Parallax from './components/parallax/index';

// import AuthBtn from './components/auth-btn/index';

export default class Root extends React.Component<any, any> {
  public render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainblock}>
          <UserBlock/>
        </div>
        <p className={styles.copyright}>© Владимир Астахов | создано с любовью в LoftSchool | 2016</p>
      </div>
    );
  }
}
