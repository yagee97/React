import React, { Component } from 'react';
//import styles from './App.module.css';
import styles from './App.scss';
import classNames from 'classnames/bind';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

console.log(styles);
const cx = classNames.bind(styles);

class App extends Component {

  render() {
    const isBlue = true;

    return (
      /*<div className={cx('box', {blue: isBlue})}>
        <div className={cx('box-inside')}></div>
      </div>
      <div>
        <Button>버튼</Button>
      </div>*/
      <div>
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;