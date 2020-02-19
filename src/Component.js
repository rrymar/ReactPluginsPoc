import React from 'react';
import { SomeTextFunc } from './plugins/pluginsConstants';

export class Component extends React.Component {
    constructor(props) {
        super(props);

        this.getText = props.container.resolve(SomeTextFunc);
    }

    render() {
        return (
            <h1>{this.getText()}</h1>
        );
    }
}