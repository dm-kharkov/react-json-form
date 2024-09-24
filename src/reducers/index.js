import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { connectRouter } from 'connected-react-router'

export default history => combineReducers({
  form,
  router: connectRouter(history)
})
