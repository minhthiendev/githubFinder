import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";

import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = (pros) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlerts = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    setTimeout(async () => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlerts }}>
      {pros.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
