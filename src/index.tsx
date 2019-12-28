import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux'
import Store from './Store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom'

console.log(WEB_ENV);

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,  
    document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}
