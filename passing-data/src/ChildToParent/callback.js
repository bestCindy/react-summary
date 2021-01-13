import React from 'react';

const Child2 = ({ onClick }) => {
    return (<div onClick={() => onClick("Parent received value from child")}>Click me</div>)
}

class Parent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    };

    handleClick = (data) => {
        this.setState({
            info: data
        })
    }

    render() {
        return (
            <div>
                <Child2 onClick={this.handleClick}></Child2>
                <div>{this.state.info}</div>
            </div>
        )
    }
}

export default Parent2