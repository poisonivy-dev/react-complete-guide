import React from "react";

const authContext = React.createContext({
  isAuthentication: false,
  login: () => {},
});

export default authContext;
