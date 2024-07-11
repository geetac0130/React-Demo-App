export const loginInfo = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: "LOGIN", payload: data });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};
