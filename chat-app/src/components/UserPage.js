import React from "react";
import FriendsContainer from './FriendsContainer';
import ChatsContainer from './ChatsContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import { withRouter } from 'react-router';

class UserPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      allUsers: []
    }
  }

  render() {
    console.log("in UserPage", this.props)
    debugger
    return (

      <div className="userPage">

        {!!this.props.friends &&
          <FriendsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends}/>
        }
        {!!this.props.chats &&
        <ChatsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends} addResponseToState={this.props.addResponseToState} />}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
