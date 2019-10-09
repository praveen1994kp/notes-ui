import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = Component =>
    ReactDOM.render(
        <Component />,
        document.getElementById('AppContainer')
    );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));