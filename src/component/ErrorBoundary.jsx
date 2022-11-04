import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
    return <div> Something is wrong with a part of your app. Click<Link to='/'> <b> home </b> </Link>and refresh to be back up</div>
   }
   return this.props.children
    
  }
}

export default ErrorBoundary