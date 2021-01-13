import React from 'react';

const SiblingA = ({ onClick }) => {
    return (<div onClick={() => onClick("this is from silbings")}>Click me</div>)
}

const SiblingB = ({ info }) => {
    return (<div>{info}</div>)
}

class Parent5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        };
    };

    setInfo = (data) => {
        this.setState({ info: data })
    };

    render() {
        return (
            <div>
                <SiblingA onClick={this.setInfo}></SiblingA>
                <SiblingB info={this.state.info}></SiblingB>
            </div>
        )
    }
}

export default Parent5;