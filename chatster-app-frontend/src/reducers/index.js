import { combineReducers } from 'redux';
import { CURRENT_USER } from '../actions'

const user = (state = {user: null, friends: [], chats: [] }, action) => {
  switch(action.type) {
    case CURRENT_USER:
    state = Object.assign({},
      state,
      {
        user: action.user,
        friends: action.friends,
        chats: action.chats,
      }
    );
    console.log(state.chats)
    return state;

    default:
    return state;
  }

}

const rootReducer = combineReducers({
  user,
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
