import * as React from 'react';

const images = require('../../assets/images/index');

const styles = require('./index.scss');

console.info(images);
console.info(styles);

export default class UserBlock extends React.Component<any, any> {
  public render () {
    return (
      <div className={styles.userblock}>
        <img src={images.img2} className={styles.userblock__image}/>
        <h3 className={styles.userblock__name}>Владимир Астахов</h3>
        <p className={styles.userblock__info}>Личный сайт веб разработчика</p>

        <nav className={styles.usermenu}>
          <ul className={styles.usermenu__list}>
            <li className={styles.usermenu__item}>
              <a href="#" className={styles.usermenu__link}>Мои работы</a>
            </li>
            <li className={styles.usermenu__item}>
              <a href="#" className={styles.usermenu__link}>Обо мне</a>
            </li>
            <li className={styles.usermenu__item}>
              <a href="#" className={styles.usermenu__link}>Блог</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
