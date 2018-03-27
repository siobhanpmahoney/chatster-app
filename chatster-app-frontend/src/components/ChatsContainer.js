import React from "react";
import ChatList from './ChatList'
import ActiveChatContainer from './ActiveChatContainer'
import { Grid, Menu, Input, Header, Label, Icon, Dropdown} from 'semantic-ui-react'


class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: [],
      activeChat: [],
      chatSearch: "",
      sortSelection: ""
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
    let workingChats = this.sortChats()
    if (this.state.chatSearch == "") {
      filteredChats = workingChats
    } else {
      let sv = this.state.chatSearch
      workingChats.map((chat) => {
        return chat.messages.map((message) => {
          if (message.content.includes(sv) && !filteredChats.includes(chat)) {
            filteredChats.push(chat)
          }})
      })}
    return filteredChats
  }

  chooseSort = (event, { name, value }) => {
    event.preventDefault()

    this.setState({ sortSelection: value })



    console.log("bye")
    //
    // this.setState({
    //   sortSelection: choice
    // })
  }




  sortChats = () => {
    console.log(this.state)
    let chats = []
    if (this.state.sortSelection == '') {
      return this.props.chats
    } else if (this.state.sortSelection == 'friend') {
      return this.props.chats.sort((a,b) => {
        let uNMEa = this.userNotMe(a)
        console.log(uNMEa)
        let uNMEb = this.userNotMe(b)
        console.log(uNMEb)
        return uNMEa.username.localeCompare(uNMEb.username)
      })
    }
  }

  //helper methods

  userNotMe = (someChat) => {
    let correctUser = someChat.users.find((u) => u.id != this.props.user.user.id)
    return correctUser
  }

  render() {

    if (!this.props.user) {
      return<div>loading..</div>
    }
    const chats = this.filterChats()
    const sortOptions = [{text: "Friend", value: "friend", name: "friend", key: "friend"}, {text: "Recent Message", value: "recentMessage"}, {text: "Date Created", value: "conversationDate"}]
    return (
      <div className="chatsContainer">
        <Menu compact icon='labeled' fluid vertical tabular='left' align='left'>

          <Header
            as='h3'
            dividing
            style={{margin: "0.5em", padding:"0.25em", fontFamily:"Gill Sans", fontWeight:"575", color:"#718CA1", clear:"both"}}
            icon='conversation'
            content='Chats' />

          <Menu transparent fluid align='left' style={{border:"none", height:"80%", width:"96%", fontSize:"72%"}}>

          <Menu.Menu transparent position='right' compact icon='labeled' style={{FontFamily:"Avenir", display:"inline", float:"left"}}>
            <Menu.Item fitted style={{fontSize:"72%", fontFamily:"Avenir"}}>
              <Input transparent icon='search' placeholder='Search Chats...' onChange={this.searchFieldListener} style={{fontFamily:"Avenir", display:"inline", float:"left", fontSize:"72%"}} />
            </Menu.Item>
</Menu.Menu>

<Dropdown
  button
  className='icon'
  floating
  labeled
  icon='sort content ascending'
  options={sortOptions}
  search
  onChange={this.chooseSort}
  style={{display:"inline", float:"left", fontSize:"72%", marginRight:"0.1em"}}
  text='Sort by...'
/>








</Menu>





            <ChatList chats={chats} user={this.props.user} onClick={this.props.updateActiveChat}  activeChat={this.props.activeChat} activeChatMessages={this.props.activeChatMessages} activeChatId={this.props.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} />


          </Menu>

        </div>
      )
    }


  }
  export default ChatsContainer
