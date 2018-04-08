import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'
import { withRouter } from 'react-router';
import { Grid } from 'semantic-ui-react'

class FindNewFriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nonFriendUsers: []
    }
  }

  componentDidMount() {
    let friendAndUserIds = this.props.friends.map((f) => {
      return f.id
    })
    friendAndUserIds.push(this.props.user.user.id)
    console.log("friendAndUserIds", friendAndUserIds)
    fetch("http://localhost:3000/api/v1/users")
      .then(response => response.json())
      .then(json => {
        this.setState({
          nonFriendUsers: json.filter((user) => {
            return !friendAndUserIds.includes(user.id);
          })
        })
      })

  }


  render() {
    console.log(this.state.nonFriendUsers)
    return (
      <div className="nonFriendContainer">
        <h1 className="nonFriendHeader">Add New Friends</h1>
        <div className="nonFriendList">
          {this.state.nonFriendUsers.map((u) => {
            return <div className="nonFriend" key={u.id}>
              <span className="nonFriend">
                <img src={u.avatar} className="nonFriend" />

                <span className="nonFriendName">
                  {u.username}<br />
                <button className="addNewFriend" onClick={()=>this.props.addNewFriend(this.props.user.user, u)}>Add Friend</button>
                </span>
              </span>

            </div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user.user,
    friends: state.user.friends,
    chats: state.user.chats,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindNewFriendsContainer));
