const init = {
  data: [],
};

const requestReducer = (state = init, action) => {
  switch (action.type) {
    case 'get-request-claim': {
      return {...state, data: action.payload};
    }
    default:
      return state;
  }
};

export default requestReducer;