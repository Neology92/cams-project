import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class Main extends React.PureComponent {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

ReactDOM.hydrate(<Main />, document.getElementById('app'));
