import React from 'react'
import './feed.css'
import Query from './Query'

function Feed() {
  return (
    <div className ="feed">
     <div className='feed_header'>
        <h2>Home</h2>
        </div>  
        <Query/>
      
    </div>
  )
}

export default Feed