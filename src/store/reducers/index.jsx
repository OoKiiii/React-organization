import { combineReducers } from 'redux'

import memberReducer from './member.reducer'
import modalReducer from './modal.reducer'

const rootReducer = combineReducers({

  member: memberReducer,
  modal: modalReducer

})

export default rootReducer
