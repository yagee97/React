import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.done !== nextProps.done;
    }
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        /* 이렇게 this.props안에 있는 값을 비구조화 할당을 이용하여 레퍼런스를 만들어 주면,
        props를 사용할 때마다 this.props.onToggle, 이런 식으로 매번 앞에 this.props를 붙이는 것을 생략할 수 있다.
        */
        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type = "checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                    }
                }>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;