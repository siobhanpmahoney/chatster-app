import React from 'react';
import { Button, Comment, Form, Header, Label, Segment, Sticky, Icon, Feed, Grid, Select, Input } from 'semantic-ui-react'



class ActiveChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageText: ""
    }
  }

  messageDraftListener = (event) => {
    event.preventDefault()
    let draft = event.target.value
    this.setState({
      messageText: draft
    })
  }

  messageSend = (event) => {
    event.preventDefault()


    let chat = this.props.chat
    let message = this.state.messageText

    this.props.handleNewMessageSubmit(event, chat, message)
    this.setState({
      messageText: ""
    })

  }

  closeChat = (event) => {
    event.preventDefault()
    this.props.handleCloseChat(this.chat), this.renderNoChats
  }

  renderNewChat = () => {

  }

  renderChat = (message) => {

    if (message.username == this.props.user.user.username) {
      return {
        padding:"0.5em",
        overflow:"auto",
        maxHeight: "400px",
        scrollBehavior: "smooth",
        fontFamily:"Avenir",
        borderRadius:"4px",
        background: "linear-gradient( #b3e7ed91, #b3e7ed66)",
        margin: "1em"
      }
    } else {
      return {
        padding:"0.5em",
        overflow:"auto",
        maxHeight: "400px",
        scrollBehavior: "smooth",
        fontFamily:"Avenir",
        borderRadius:"4px",
        background:"linear-gradient( #EBEFF3, #E8EEF4)",
        margin: "1em"
      }
    }
  }

  formattedDate = (dateSent) => {
    let today = new Date()
    let dateSaved = new Date(dateSent)
    if (today.toLocaleDateString() == dateSaved.toLocaleDateString()) {
      return `Today at ${dateSaved.toLocaleTimeString()}`
    }
  else {
    return `${dateSaved.toLocaleDateString()} at ${dateSaved.toLocaleTimeString()}`
  }
}



  render() {
    let display = null
    if (this.props.messages.length < 1) {
      display = <h3 className="nothing-to-display">Get Chatting!</h3>
    }
    else {
      display = (<div className="activeChatWindowContainer">
      <div className="topBar">
        <Sticky>
            <Button size='tiny' floated="right" onClick={this.closeChat} style={{ color:"#718CA1", padding:"0.25em", marginBottom:"0.25em", marginLeft:"0.5em"}}><i class="material-icons">close</i></Button>

            <Header as='h3' dividing style={{margin: "0.5em", padding:"0.25em", fontFamily:"Gill Sans", fontWeight:"550", color:"#1E79FF"}}>
                {this.props.chat.title}
            </Header>




        </Sticky>
      </div>
<div>
      <Comment.Group>
        <div className="messageHistory" scroll>
        {this.props.messages.map((m) => {
          return(<Comment key={m.id} className="messageDisplay" >


             <Comment.Avatar float attached="right" as='a' src={m.avatar} />


                    <Comment.Content>
                      <Comment.Author as='a' style={{fontFamily:"Gill Sans", fontWeight:"550"}}>{m.username}</Comment.Author>
                      <Comment.Metadata>{this.formattedDate(m.created_at)}</Comment.Metadata>
                      <Comment.Text style={this.renderChat(m)}>{m.content}</Comment.Text>
                    </Comment.Content>




       </Comment>)
        })}
        </div>
        <Comment>
          <Comment.Content>
            <Form inline reply>
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>
</div>
      <Sticky>
<div>

        <button onClick={this.messageSend} type='submit' style={{padding:"0.25em", marginLeft:"0.2em", color:"blue", fontSize:"0.75em", borderRadius:"8px"}}><i class="material-icons" style={{size:"0.75em"}}>send</i></button>

        <textarea type='text' placeholder='Type a message!...' value={this.state.messageText} onChange={this.messageDraftListener} style={{fontFamily:"Avenir", width:"90%", margin:"0 0.5em 0.5em 0", minHeight: "75px", flexDirection: 'row', float:"right", padding:"0.25em", borderRadius:"6px"}} />

</div>
      </Sticky>


    </div>)
    }

        return (
          <div style={{fontFamily:"Avenir"}}>
            {display}
          </div>
        )
    }


  }




  export default ActiveChat
