import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'

import Application from 'containers/Application'

import { history, store, cache } from './bootstrap'

import theme from 'constants/theme'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <Application />
        </CacheProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
