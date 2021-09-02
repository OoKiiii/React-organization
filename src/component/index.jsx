import React from 'react'
import Navigation from './navigation'
import MemberList from './MemberList'

const Index = () => {

  return(
    <React.Fragment>
      <main>
        <div>
          <div className="tree-nav">
            <Navigation />
          </div>
          <div className="tree-content">
            <div className="tree-component-box">

            </div>
            <div className="tree-member-box">
              <MemberList />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>

  )
}

export default Index