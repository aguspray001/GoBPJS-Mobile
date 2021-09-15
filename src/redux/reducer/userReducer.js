const initialState = {
    user: [],
    inProsess: false
  };
  
  export default userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'user-update': {
        const {user} = payload;
        return {...state, user: [], inProcess: false};
      }
      case 'user-update-success': {
        const {user} = payload;
        return {...state, user: user, inProcess: true};
      }
      case 'user-update-failed': {
        const {user} = payload;
        return {...state, user: [], inProcess: false};
      }
      default:
        return state;
    }
  };
  