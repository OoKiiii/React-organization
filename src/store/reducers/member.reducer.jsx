import {memberConstants} from '../constants'
import TestData from '../../test.json'
import TestData2 from '../../test2.json'

const initialState = {
  params: '',
  type: '',
  tree: [],
  data: []
}

export default function member(state = initialState, action) {
  switch (action.type) {
    case memberConstants.TREE_SUCCESS:
      return {
        ...state,
        params: action.params,
        tree: TestData2.treeList
      }

    case memberConstants.MEMBER_TREE_SUCCESS:
      return {
        ...state,
        params: action.params,
        data: TestData.treeList[action.params]?.treeUser
      }

    default:
      return state
  }
}
