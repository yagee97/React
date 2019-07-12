import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    // todoList 컴포넌트는 todos props를 바꿀 때만 리렌더링되어야 한다.
    // 따라서 todos 값을 바꿀 때만 컴포넌트에 업데이트 하도록 해야한다.
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                key={todo.id}
                done={todo.done}
                onToggle={()=>onToggle(todo.id)}
                onRemove={()=>onRemove(todo.id)}
                >
                {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;