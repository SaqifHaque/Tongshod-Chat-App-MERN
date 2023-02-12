import React from 'react'
import Navigation from './Navigation'

const PublicLayout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col flex-1 w-full overflow-hidden">
        <Navigation/>
        {children}
    </div>
  )
}

export default PublicLayout