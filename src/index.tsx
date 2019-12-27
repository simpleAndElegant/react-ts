import React, { Component, ComponentElement } from './react';
import ReactDOM from './react-dom';
interface Props {
    title: string
}
class Welcome extends React.Component {
    render () {
        return React.createElement('h1', { className: 'title' }, this.props.title);
    }
}
let element: ComponentElement<Props> = React.createElement<Props>(Welcome, { title: '标题' }) as ComponentElement<Props>;

ReactDOM.render<Props>(element, document.getElementById('root') as HTMLElement);

