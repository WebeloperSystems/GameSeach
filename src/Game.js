import React from 'react'

function Game({id,title,thumbnail,short_description, developer,release_date}) {
  return (
    <div>
          <p>{id}</p>
          <p>{title}</p>
          <p>{thumbnail}</p>
          <p>{short_description}</p>
          <p>{developer}</p>
          <p>{release_date}</p>
    </div>
  )
}

export default Game