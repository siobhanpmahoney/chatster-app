export const CURRENT_USER = 'CURRENT_USER'

export function loadCurrentUser(user) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: CURRENT_USER,
      user: json,
      friends: json.friends,
      chats: json.chats,
    }))
  }
}
