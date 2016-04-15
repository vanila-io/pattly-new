import React from 'react';
import cx from 'classnames';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';


import styles from '../styles/Navbar.css';


export default function Navbar() {

  return (
    <nav>
      <div className={cx('nav-wrapper', styles.navWrapper)}>
        <a href="#!" className={cx('brand-logo', styles.brandLogo)}>
          <img src={require('../images/Smallsquares.svg')} alt />
        </a>
        <a
          href="#"
          data-activates="mobile-demo"
          className="button-collapse">
          <i className="material-icons">menu</i>
        </a>
        <ul className={cx('left', 'navbarLeft', styles.navbarLeft, 'navbarCanvas')}>
          <li>
            <TextField
              name="width"
              hintText="Width"
              className={cx(styles.inputField, styles.widthFixed)}
            />
          </li>
          <li>
            <TextField
              name="height"
              hintText="Height"
              className={cx(styles.inputField, styles.widthFixed)}
            />
          </li>

          <li>
          <Checkbox
                label="Snap to grid"
                className={cx(styles.checkGrid)}
              />
          </li>
          <li>
          <Checkbox
                label="Ratio"
                className={cx(styles.checkRatio)}
              />
          </li>
          <li>
          <TextField
              name="canvasColor"
              hintText="#ffffff"
              className={cx(styles.inputField, styles.widthFixed)}
            />
        </li>
          <li>
           <RaisedButton className={cx('btnEnterGrid', styles.btnEnterGrid)} label="Enter grid" secondary={true} />
          </li>

        </ul>
      </div>
    </nav>
  );
}

