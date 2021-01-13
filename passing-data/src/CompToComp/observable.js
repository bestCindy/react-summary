import React from 'react';
import EventBus from './EventBus'

class Parent7 extends React.Component  {
    render() {
        return (
            <React.Fragment>
                <ComponentB />
                <ComponentA />
            </React.Fragment>
        )
    }
}

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        }
    }

    componentDidMount() {
        EventBus.addEventListener("myEvent", this.handleEvent);
    }

    componentWillUnmount() {
        EventBus.removeEventListener("myEvent", this.handleEvent);
    }

    handleEvent = (e) => {
        this.setState({
            info: e.detail.info
        })
    }

    render() {
        return (
            <div>{this.state.info}</div>
        )
    }
}

class ComponentB extends React.Component {
    sendEvent = () => {
        EventBus.dispatchEvent("myEvent", { info: "this is from my silbling" });
    }

    render() {
        return (
            <button onClick={this.sendEvent}>Click me</button>
        )
    }
}

export default Parent7