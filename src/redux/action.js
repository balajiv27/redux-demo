export const setServerResponse = (response) => {
    return {
      type: "SET_SERVER_RESPONSE",
      payload: response,
    };
  };

export const clearServerResponse = () => {
    return {
        type: "CLEAR_SERVER_RESPONSE"
    }
}

export const getUsersAction = (response) => {
    return {
        type: "GET_USERS",
        payload: response
    }
}
  