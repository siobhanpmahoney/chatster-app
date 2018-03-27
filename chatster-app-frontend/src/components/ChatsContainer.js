import React from "react";
import ChatList from './ChatList'
import ActiveChatContainer from './ActiveChatContainer'
import { Grid, Menu, Input} from 'semantic-ui-react'


class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: [],
      activeChat: [],
      chatSearch: ""
    }
  }



  searchFieldListener = (event) => {
    console.log(event.target.value)
    let searchV = event.target.value

    this.setState({
      chatSearch: searchV
    })
  }

  filterChats = () => {

    let filteredChats = []
    if (this.state.chatSearch == "") {
      filteredChats = this.props.chats
    } else {
      let sv = this.state.chatSearch
      this.props.chats.map((chat) => {
        return chat.messages.map((message) => {
          if (message.content.includes(sv) && !filteredChats.includes(chat)) {
            filteredChats.push(chat)

          }
        })
      })
    }

    return filteredChats
  }




  render() {

    if (!this.props.user) {
      return<div>loading..</div>
    }

    return (
      <div className="chatsContainer">
            <Menu fluid vertical tabular='left' align='left' style={{fontSize:"15px"}}>
              <Menu.Item style={{fontFamily:"Nunito Sans", fontSize: "20px"}}>Chats <button onClick = {this.props.renderNewChatForm} style={{borderRadius:"10px", fontSize:"13px"}}><i class="material-icons" style={{fontSize:"13px"}}>add</i></button></Menu.Item>



              <ChatList chats={this.filterChats()} user={this.props.user} onClick={this.props.updateActiveChat}  activeChatMessages={this.props.activeChatMessages} activeChatId={this.props.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} />

                <Menu.Item>
                  <Input icon='search' placeholder='Search Chats...' onChange={this.searchFieldListener} />
                </Menu.Item>
          </Menu>

      </div>
    )
  }


}
export default ChatsContainer
