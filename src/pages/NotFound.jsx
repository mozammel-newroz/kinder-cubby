import React from 'react'
import NoSearchResult from '../assets/images/NoSearchResult@2x.png'

const NotFound = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <img src={NoSearchResult} alt="not found" />
    </div>
  )
}

export default NotFound
