import React from "react";
import FriendsContainer from './FriendsContainer';
import ChatsContainer from './ChatsContainer';
import ActiveChatContainer from './ActiveChatContainer'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import { withRouter } from 'react-router';
import { Grid, Header } from 'semantic-ui-react'


class UserPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      allUsers: [],
      activeChatMessages: [],
      activeChat: [],
    }
  }


  startNewChat = () => {

  }

  //fetching chat archive from backend

  updateActiveChat = (selectChat) => {
    this.fetchActiveChatInfo(selectChat)

  }


  fetchActiveChatInfo = (chat) => {
    fetch(`http://localhost:3000/api/v1/chats/${chat.id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        activeChatMessages: json.messages,
        activeChat: json.chat,
      })
    })

  }

  //sending new message to backend and returning updated backend data

  handleNewMessageSubmit = (event, chat, message) => {
    event.preventDefault()
    console.log(chat)
    console.log(message)
    let u = this.props.user

    let newMessage = {content: message, chat_id: chat.id, user_id: this.props.user.user.id, chat: chat}
    console.log(newMessage)

    const url = 'http://localhost:3000/api/v1/chats/' + this.state.activeChat.id +'/messages';

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        messages: {
          content: message,
          chat_id: chat.id,
          user_id: this.props.user.user.id,
          chat: chat
        }
      })
    })
    .then((response) => response.json())
    .then(json => {
      this.addResponseToState(json)
    })
  }

  addResponseToState = (json) => {
    let currentMessageState = this.state.activeChatMessages.slice()

    this.setState({
      activeChatMessages: [...currentMessageState, json[json.length-1]]
    })
  }

  handleCloseChat = (chat) => {
    let setChatState = []
    let messageState = this.state.activeChatMessages

    messageState.splice(0)

    this.setState({
      activeChatMessages: messageState,
      activeChat: setChatState
    })

  }

  render() {


    return (
      <div>

        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header size='huge'>First Header</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={4} textAlign={"left"}>
            {!!this.props.friends &&

              <FriendsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends} addResponseToState={this.addResponseToState} handleCloseChat={this.handleCloseChat} handleNewMessageSubmit={this.handleNewMessageSubmit} fetchActiveChatInfo={this.fetchActiveChatInfo} updateActiveChat={this.updateActiveChat} activeChatMessages={this.state.activeChatMessages} activeChat={this.state.activeChat} />

            }
          </Grid.Column>
          <Grid.Column width={12}>
            {!!this.props.chats &&


              <div><ChatsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends} addResponseToState={this.addResponseToState} handleCloseChat={this.handleCloseChat} handleNewMessageSubmit={this.handleNewMessageSubmit} fetchActiveChatInfo={this.fetchActiveChatInfo} updateActiveChat={this.updateActiveChat} activeChatMessages={this.state.activeChatMessages} activeChat={this.state.activeChat}/></div>

            }
          </Grid.Column>
        </Grid>
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
