import React from 'react'
import Friend from './Friend'



const FriendList = (props) => {

  return(
    <div className="friendList">
      FriendList
      <ul>
        {props.friends.map((b) => {
          return <Friend friend={b} key={b.id} />
        })}
      </ul>
    </div>
  )
}

export default FriendList
