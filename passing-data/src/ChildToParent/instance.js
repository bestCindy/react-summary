import React from 'react';

class Child3 extends React.Component {
    myFunc() {
        return `Parent received value from child`
    }
    
    render() {
        return(<div></div>)
    }
}

class Parent3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        };
    };

    componentDidMount() {
        this.setState({
            info: this.foo.myFunc()
        });
    };

    render() {
        return (
            <div>
                <Child3 ref={foo => this.foo = foo} />
                <div>{this.state.info}</div>
            </div>
        );
    };
}

export default Parent3;