import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         errorMsg :false
      }
    }

    static getDerivedStateFromError(err){
        
        return {
            errorMsg : true
        }
    }
  render() {
    
   if(this.state.errorMsg) {
    return <div> Something is wrong with a part of your app</div>
   }
   return this.props.children
    
  }
}

export default ErrorBoundary