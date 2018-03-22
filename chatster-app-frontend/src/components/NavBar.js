import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const link = {
  width: '100px',
  paddingTop: '1em',
  paddingBottom: '1em',
  paddingLeft: '0.75em',
  paddingRight: '0.75em',
  marginTop: '1em',
  marginBottom: '1em',
  marginLeft: '0.75em',
  marginRight: '0.75em',
  color: '#718CA1',
  fontSize: '13px',
  alignText: "right",
  textDecoration: "none",
  borderRadius: "6px"
}

class NavBar extends React.Component {

  renderHTML = () => {
    if (!!this.props.user) {
      return (

      <span style={{padding:"1em", margin:"1em"}}>

        <span style={{float:"right", style:"inline"}}>
          <NavLink to="/" exact style={link} activeStyle={{ color:"white", textDecoration:"none"}}>Profile</NavLink>

          <NavLink onClick={this.props.logOutUser} to="/logout" exact style={link} activeStyle={{color:"white", textDecoration:"none"}}> Log Out </NavLink>
        </span>
      </span>
  )

      } else {
        return (
          <span style={{float:"right", style:"inline", margin:"1em"}}>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              backgroundColor:'#7FE6E1', color:"white", textDecoration:"none"
            }}>Log In</NavLink>
        </span>
        )
      }
    }

  render() {
    return (
      <div className="navbar" style={{padding:"1em", height:"100px"}}>
        <span style={{fontSize:"36px", fontWeight:"800", fontFamily:"Avenir", style:"inline", marginTop:"0.75em", padding:"1em", alignment:"left"}}>ChatApp</span>
        {this.renderHTML()}
      </div>)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
