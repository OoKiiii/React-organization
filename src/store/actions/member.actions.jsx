import {memberConstants} from '../constants'

export const memberActions = {
  TreeLoad,
  MemberLoad
}

function TreeLoad(params) {
  return {
    type: memberConstants.TREE_SUCCESS,
    params
  }
}

function MemberLoad(params) {
  return {
    type: memberConstants.MEMBER_TREE_SUCCESS,
    params
  }
}