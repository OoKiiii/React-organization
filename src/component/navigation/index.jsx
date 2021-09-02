import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {memberActions, modalActions} from '../../store/actions'

import AddListModal from './AddListModal'

const Navigation = props => {

  const { modal, member } = props

  const handleTreeLoad = () => {
    props.TreeLoad()
  }

  const handleType = (params) => {
    props.MemberLoad(params)
  }

  useEffect(() => {
    handleTreeLoad()
  }, [member.tree])

  return(
    <React.Fragment>
      <div>
        <div className="list-add">
          <button className="btn" onClick={() => props.modalOpen()}>추가</button>
        </div>
        {
          member ? member.tree?.map((item, index) => (
              <ul key={index}>
                <li onClick={() => handleType(item.type)}>{item.treeItem}</li>
              </ul>
            ))
            : ''
        }
      </div>
      {
        modal.isOpen &&
        <AddListModal />
      }
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
  modalOpen: modalActions.modalOpen,
  TreeLoad: memberActions.TreeLoad,
  MemberLoad: memberActions.MemberLoad
}

export default connect(
  mapStateToProps,
  actionCreators
)(Navigation)