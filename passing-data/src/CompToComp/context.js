import React from 'react';

const ThemeContext = React.createContext("light");

class Parent6 extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="This is from provider">
                <Wrap />
            </ThemeContext.Provider>
        )
    }
}

function Wrap() {
    return (
        <div>
            <Comp1 />
            <Comp2 />
        </div>
    )
}

// 有状态组件
class Comp1 extends React.Component {
    static contextType = ThemeContext;//需要声明一下，这样子组件才能拿到 context 的值
    render() {
        const value = this.context;
        return (<div>With state -- {value}</div>)
    }
}

//无状态组件
function Comp2() {
    return (
        <ThemeContext.Consumer>
            {
                value => <div>Without state -- {value}</div>
            }
        </ThemeContext.Consumer>
    )
}

export default Parent6;