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
    if (this.state.sortSelection == 'friend') {
      return this.props.chats.sort((a,b) => {
        let uNMEa = this.userNotMe(a)
        let uNMEb = this.userNotMe(b)
        return uNMEa.username.localeCompare(uNMEb.username)
      })
    } else if (this.state.sortSelection == 'recentMessage') {
      return this.props.chats.sort((a,b) => {
        let aDate = new Date(a.messages[a.messages.length-1].created_at).valueOf()
        let bDate = new Date(b.messages[b.messages.length-1].created_at).valueOf()
        return bDate - aDate
      })
    } else if (this.state.sortSelection == 'conversationDate') {
      return this.props.chats.sort((a,b) => {

        let aDate = new Date(a.chat.created_at).valueOf()
        let bDate = new Date(b.chat.created_at).valueOf()
        return aDate - bDate
      })
    }
    else {
      return this.props.chats
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
        <Menu compact icon='labeled' fluid vertical tabular='left' align='left' style={{flexDirection:"left", margin:"0.5em", padding:"0.1em"}}>

          <Header
            as='h3'
            dividing
            style={{margin: "0.5em", padding:"0.25em", fontFamily:"Avenir", fontWeight:"550", color:"#718CA1", clear:"both"}}
            icon='conversation'>Chats <button onClick={()=>this.props.updateActiveChat("new")}> + </button></Header>



          <Grid>

          <Menu borderless transparent fluid horizontal align='left' style={{width:"100%", marginLeft:"-1em", color:"#33475b", fontSize:"15px",fontFamily: "Calibri", display:"inline", flexDirection:"column", padding:"0.75em 0", marginBottom:"0.5em", marginTop:"0.25em", clear:"both", justifyContent: "center"}}>

    <Grid.Column>
          <Menu.Menu borderless transparent position='left' icon='labeled' style={{FontFamily:"Avenir", float:"left", display:"inline", flexDirection:"left", verticalAlign:"top", flexDirection:"column", fontSize:"11.5px", justifyContent: "center"}}>
            <Menu.Item fitted fluid transparent borderless style={{fontSize:"64%", fontFamily:"Calibri"}}>
              <Input icon='search' transparent placeholder='Search Chats...' onChange={this.searchFieldListener} style={{fontFamily:"Avenir",  display:"inline", width:"80%", float:"left",  flexDirection:"column"}} />
            </Menu.Item>
</Menu.Menu>
</Grid.Column>
<Grid.Column>

<Dropdown
  button
  className='icon'
  borderless

  labeled
  align='right'
  icon='sort content ascending'
  options={sortOptions}
  search
  onChange={this.chooseSort}
  style={{fontSize:"11px", fontWeight: "380", fontFamily:"Avenir", display:"inline", color:"#62B1C1", backgroundColor:"white", flexDirection:"column", float:"right"}}

/>
</Grid.Column>








</Menu>
</Grid>






            <ChatList chats={chats} user={this.props.user} onClick={this.props.updateActiveChat}  activeChat={this.props.activeChat} activeChatMessages={this.props.activeChatMessages} activeChatId={this.props.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} />


          </Menu>

        </div>
      )
    }


  }
  export default ChatsContainer
