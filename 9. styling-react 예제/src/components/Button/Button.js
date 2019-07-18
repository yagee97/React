import React, { Component } from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    );
};

export default Button;

/* 함수형 컴포넌트로 구성, props 에는 children과 
...rest가 있다. 여기에서 rest는 나중에 이 컴포넌트가 받을
모든 props를 명시함. 비구조화 할당 문법에서 
...foo 형식으로 입력하면 비구조화 할당을 할 때 따로 지정
하지 않은 것들은 모두 foo 객체에 담긴다. */
