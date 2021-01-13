import React, { Component } from 'react';

// 利用原生 DOM 的事件冒泡机制

const Child4 = () => {
    return (
        <button>Click me</button>
    )
}

class Parent4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <Child4></Child4>
                <div>{this.state.info}</div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            info: `You've clicked the Child`
        })
    }
}

export default Parent4;