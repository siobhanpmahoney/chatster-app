import React from 'react';
import { Button, Comment, Form, Header, Label, Segment, Sticky, Icon, Feed, Grid } from 'semantic-ui-react'



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

  renderChat = (message) => {

    if (message.username == this.props.user.user.username) {
      return {
        padding:"0.5em",
        overflow:"auto",
        maxHeight: "400px",
        scrollBehavior: "smooth",
        fontFamily:"Nunito Sans",
        borderRadius:"4px",
        backgroundColor:"#b3e7ed66",
        margin: "1em"
      }
    } else {
      return {
        padding:"0.5em",
        overflow:"auto",
        maxHeight: "400px",
        scrollBehavior: "smooth",
        fontFamily:"Nunito Sans",
        borderRadius:"4px",
        backgroundColor:"#F9FBFC",
        margin: "1em"
      }
    }
  }



  render() {
    console.log(this.props)
    let display = null
    if (this.props.messages.length < 1) {
      display = <h3 className="nothing-to-display">Nothing to display</h3>
    }
    else {
      display = (<div className="activeChatWindowContainer">
      <span className="topBar">
        <Icon circular onClick={this.closeChat} name="close" style={{padding:"0.25em", margin:"0.25em"}} />
      </span>
      <Sticky>
        <Header as='h4' dividing style={{padding:"0.25em", margin:"0.25em", fontFamily:"Nunito Sans"}}>
          {this.props.chat.title}
        </Header>
      </Sticky>


      <Comment.Group>
        {this.props.messages.map((m) => {
           return(<Comment key={m.id} className="messageDisplay" style={this.renderChat(m)}>


              <Comment.Avatar float attached="right" as='a' src={m.avatar} />


                     <Comment.Content>
                       <Comment.Author as='a'>{m.username}</Comment.Author>
                       <Comment.Text>{m.content}</Comment.Text>
                     </Comment.Content>




        </Comment>)
        })}
        <Comment>
          <Comment.Content>
            <Form inline reply>
              <Sticky>
                <Form.TextArea value={this.state.messageText} onChange={this.messageDraftListener} />
                <Button onClick={this.messageSend} labelPosition='left' icon='send outline' primary />
              </Sticky>
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>


    </div>)
    }

        return (
          <div style={{fontFamily:"Nunito Sans", background:"white"}}>
            {display}
          </div>
        )
    }


  }




  export default ActiveChat
