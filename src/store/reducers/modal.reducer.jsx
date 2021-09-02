import {modalConstants} from '../constants'

const initialState = {
  isOpen: false
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case modalConstants.MODAL_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      }

    case modalConstants.MODAL_CLOSE:
      return {
        ...state,
        isOpen: !state.isOpen
      }

    default:
      return state
  }
}
