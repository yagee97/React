import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


class App extends Component {

    state={
        input:'', //input 값
        //일정 데이터 초깃값
        todos:[
            {id:0, text:'리액트 공부하기',done: true},
            {id:1, text:'컴포넌트 스타일링 해보기', done: false}
        ]
    }

    //일정 데이터 안에 들어가는 id 값
    id = 1
    getId = () =>{
        return ++this.id;
    }

    handleChange = (e) =>{
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    handleInsert = () =>{
        const {todos, input} = this.state;

        // 새 데이터 객체 만들기
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };
        //배열안에 새 데이터를 집어 넣음
        this.setState({
            todos: [...todos, newTodo],
            input:''
        });
    }

    // to do 아이템 토글하기
    handleToggle = (id) => {
        //id로 배열의 인덱스를 찾습니다.
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        //찾은 데이터의 done값을 반전시킨다.
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        // slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사합니다.
        // 그리고 그 사이에는 변경된 todo 객체를 넣어준다.
        this.setState({
            todos:[
                ...todos.slice(0, index), 
                toggled,
                ...todos.slice(index+1,todos.length)
            ]
        });
    }

    // 선택한 id를 배열에서 제거합니다.
    handleRemove = (id)=>{
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        // slice 전후 데이터를 복사하고, 우리가 찾은 index는 제외시킵니다.
        this.setState({
            todos : [
                ...todos.slice(0,index),
                ...todos.slice(index+1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange, 
            handleInsert,
            handleToggle,
            handleRemove
        } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={handleToggle} onRemove = {handleRemove}/>
            </PageTemplate>
        );
    }
}
export default App;