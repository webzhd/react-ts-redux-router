import * as React from 'react';
import PageIndex from './Page'

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <>
                <PageIndex />
            </>
        );
    }
}
