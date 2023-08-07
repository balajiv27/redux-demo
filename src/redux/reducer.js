const initialState = {
    serverResponse: [],
    details:[]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_SERVER_RESPONSE":
        return {
          ...state,
          serverResponse: action.payload,
        };
     case "CLEAR_SERVER_RESPONSE":
        return initialState
     case "GET_USERS":
        return {
            ...state,
            details : action.payload
        };
      default:
        return state;
    }
  };
  

  export default reducer;
  