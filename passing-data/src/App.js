import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Parent1 from "./ParentToChild/props.js";
import Parent2 from "./ChildToParent/callback.js";
import Parent3 from "./ChildToParent/instance.js";
import Parent4 from "./ChildToParent/eventBubble.js";
import Parent5 from "./SiblingToSibling/parentCompnent.js";
import Parent6 from "./CompToComp/context.js";
import Parent7 from "./CompToComp/observable.js";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/ParentToChild/props/">父传子 -- Props</Link></li>
                    <li><Link to="/ChildToParent/callback/">子传父 -- Callback Functions</Link></li>
                    <li><Link to="/ChildToParent/instance/">子传父 -- Instance Methods</Link></li>
                    <li><Link to="/ChildToParent/eventBubble/">子传父 -- Event Bubbling</Link></li>
                    <li><Link to="/SiblingToSibling/parentCompnent/">兄弟组件传值 -- Parent Component</Link></li>
                    <li><Link to="/CompToComp/context/">兄弟组件传值 -- Context</Link></li>
                    <li><Link to="/CompToComp/observable/">兄弟组件传值 -- Publish/Subscribe</Link></li>
                    <li><a href="https://github.com/bestCindy/learningRedux">兄弟组件传值 -- Redux</a></li>
                </ul>
                <Route path="/ParentToChild/props/" component={Parent1}></Route>
                <Route path="/ChildToParent/callback/" component={Parent2}></Route>
                <Route path="/ChildToParent/instance/" component={Parent3}></Route>
                <Route path="/ChildToParent/eventBubble/" component={Parent4}></Route>
                <Route path="/SiblingToSibling/parentCompnent/" component={Parent5}></Route>
                <Route path="/CompToComp/context/" component={Parent6}></Route>
                <Route path="/CompToComp/observable/" component={Parent7}></Route>
            </Router>
        )
    }
}