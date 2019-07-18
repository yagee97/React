import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '기본 이름'
    }

    static PropsTypes = {
        name: PropsTypes.string,
        age: PropsTypes.number.isRequired
    }

    state = {
        number : 2
    }

    render(){
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>나이는 {this.props.age} 입니다</p>
                <p>숫자: {this.state.number}</p>
                <button onClick = {()=> {
                    this.setState({
                        number: this.state.number +1
                    })
                }}> 더하기 
                </button>
            </div>
        );
    }
}

export default MyComponent;