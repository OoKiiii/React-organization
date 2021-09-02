import React, { useState } from 'react'
import { connect } from 'react-redux'
import { modalActions } from '../../store/actions'

const MemberTree = (props) => {

  const [ state, setState ] = useState({
    treeItem: ''
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddList = (e) => {

    let data = {
      treeItem: state.treeItem
    }

    props.member.tree.push(data)
    props.modalClose()
  }

  return(
    <React.Fragment>
      <div className="tree-dim"></div>
      <div className="tree-modal-wrap">
        <div>
          <div>
            <span>목록 이름</span>
            <input
              title="리스트명"
              type="text"
              name="treeItem"
              placeholder="추가를 원하는 리스트를 적어주세요."
              onChange={(e) => handleChange(e)}
              value={state.treeItem || ""}
              autoComplete="off"
            />
          </div>
          <div className="tree-modal-button-box">
            <button className="tree-btn btn-blue disabled" onClick={() => handleAddList(state.treeItem)} disabled={state.treeItem.length === 0}>추 가</button>
            <button className="tree-btn btn-white" onClick={() => props.modalClose()}>닫 기</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    member: state.member
  }
}

const actionCreators = {
  modalClose: modalActions.modalClose
}

export default connect(
  mapStateToProps,
  actionCreators
)(MemberTree)