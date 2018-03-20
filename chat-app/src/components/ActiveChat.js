import React from 'react';


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

    event.target.parentElement.childNodes[0].value = ""
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
      display = (<div className="activeChatWindowContainer"><span className="topBar"><button onClick={this.closeChat}>close</button></span>
        <div className="messageHistory">
          {this.props.messages.map((m) => {

            return <div key={m.id} className="messageDisplay"><b>{m.username}</b>: {m.content}</div>

          })}
        </div>
        <div className="newMessageForm">
          <input type="text" onChange={this.messageDraftListener}/>
          <button onClick={this.messageSend}>Send</button>
        </div>
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
