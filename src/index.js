import React from 'react'
import ReactDOM from 'react-dom'

import AppContainer from './AppContainer'

const render = Component =>
    ReactDOM.render(
        <Component />,
        document.getElementById('AppContainer')
    );

render(AppContainer);
if (module.hot) module.hot.accept('./App', () => render(AppContainer));