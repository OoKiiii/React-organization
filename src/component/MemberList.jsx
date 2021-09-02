import React  from 'react'
import {connect} from "react-redux"
import {memberActions} from "../store/actions"

const MemberList = props => {

  const { member } = props

  return(
    <React.Fragment>
      <div>
        {
          member.data?.map((item, index) => (
            <ul className="tree-member-list" key={index}>
              <li className="avatar"></li>
              <li>{item.name}</li>
              <li>{item.treeItem}</li>
            </ul>
          ))
        }
      </div>
    </React.Fragment>

  )
}

const mapStateToProps = state => {
  return {
    member: state.member
  }
}

const actionCreators = {
  TreeLoad: memberActions.TreeLoad,
}

export default connect(
  mapStateToProps,
  actionCreators
)(MemberList)