import React from 'react'
import ErrorBoundary from './ErrorBoundary'
const Testing = () => {
  return (
    <div>
<ErrorBoundary>    <ErrorTest />
</ErrorBoundary>
    </div>
    )
}

export default Testing