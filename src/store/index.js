import { createStore as createReduxStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from 'reducers'

function createStore ({ initialState = {}, history }) {
  let middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares = [
      ...middlewares,
      createLogger({ collapsed: true, duration: true })
    ]
  }

  return createReduxStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(...middlewares)
  )
}

export const history = createBrowserHistory({ basename: '/' })
export const store = createStore({ history })
