import React from 'react';
import { Button, Comment, Form, Header, Label, Segment, Sticky, Icon } from 'semantic-ui-react'



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
    console.log(event.target.parentElement.childNodes[0].childNodes[0].value)

    event.target.parentElement.childNodes[0].childNodes[0].value = ""
    console.log(event.target.parentElement.childNodes[0].childNodes[0].value)
  }

  closeChat = (event) => {
    event.preventDefault()
    this.props.handleCloseChat(this.chat), this.renderNoChats
  }



  render() {

    let display = null
    if (this.props.messages.length < 1) {
      display = <h3 className="nothing-to-display">Nothing to display</h3>
    } else {
      display = (<div className="activeChatWindowContainer"><span className="topBar"><Icon circular onClick={this.closeChat} name="close" style={{padding:"0.5em", margin:"0.5em"}} /></span>
    <Sticky><Header as='h4' dividing style={{padding:"0.25em", margin:"0.25em"}}> {this.props.chat.title}</Header></Sticky>
    <Comment.Group threaded sticky inline style={{padding:"0.25em",overflow:"auto", maxHeight: "400px", scrollBehavior: "smooth"}}>

          {this.props.messages.map((m) => {

            return <Segment> <Label attached='top left' style={{marginLeft:"-0.1em"}}>  {m.username}</Label><Comment key={m.id} className="messageDisplay">

              <Comment.Content>



              <Comment.Text style={{marginLeft:"0.1em", padding:"0.1em"}}> {m.content}</Comment.Text>
               </Comment.Content>
               </Comment></Segment>


          })}


          <Form inline reply>
            <Sticky><Form.TextArea rows={2} onChange={this.messageDraftListener} />
            <Button content='Send' onClick={this.messageSend} labelPosition='left' icon='edit' primary /></Sticky>
        </Form>
      </Comment.Group>
      </div>)
    }

        return (
          <div>
            {display}
          </div>
        )
    }


  }




  export default ActiveChat
