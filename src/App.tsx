import * as React from 'react';
import PageIndex from './Page'
import { Provider } from 'react-redux'
import Store from './Store';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter basename="/">
                    <PageIndex />
                </BrowserRouter>
            </Provider>
        );
    }
}
