import {modalConstants} from '../constants'

export const modalActions = {
  modalOpen,
  modalClose
}

function modalOpen(params) {
  console.log(params)
  return {
    type: modalConstants.MODAL_OPEN,
    params
  }
}
function modalClose(params) {
  console.log(params)
  return {
    type: modalConstants.MODAL_CLOSE,
    params
  }
}
