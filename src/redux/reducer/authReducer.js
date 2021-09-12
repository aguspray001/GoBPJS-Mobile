const initialState = {
  user: null,
  token: '',
};

export default authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'signin-success': {
      const {user, token} = payload;
      return {...state, user: user, token: token};
    }
    case 'signin-error': {
      return {...state, user: null, token: ''};
    }
    case 'signout-success': {
      return {...state, user: null, token: ''};
    }
    default:
      return state;
  }
};
