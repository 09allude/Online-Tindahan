import React, { Component } from 'react'

class testing extends Component{
    state = {
        visible: true
    }
    
    render() {
        return (
            <div className="Dashboard_Frame">
              <div className="Dashboard_Menu">
                <button onClick={() => {
                  this.setState({ visible: false })
                }} >Click Me!</button>
              </div>
        
              {/* { this.state.visible ? <div> <Dashboard_User /> <div/> : null } */}
        
            </div>
        )
    }
}

export default testing