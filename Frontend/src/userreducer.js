// reducers/userReducer.js
const initialState = {
    userName: "Sudha ",
    email: "Sudha@example.com",
    phoneNumber: "1458967890",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // Add case statements for any actions you might want to handle in the future
      default:
        return state;
    }
  };
  
  export default userReducer;
  