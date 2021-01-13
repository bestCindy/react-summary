import React from 'react';

const Child1 = ({ name }) => {
    return (<div>Child received value from parent: {name}</div>)
}

class Parent1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Cindy"
        };
    }
    render() {
        return (
            <Child1 name={this.state.name}></Child1>
        )
    }
}

export default Parent1;