'use client'

import { useReducer, ReactNode } from "react";
import initialState from "./data";
import reducer from "./reducer";
import { STATUS } from "@/hooks/useStatus";
import { StatusContext, StatusContextType } from "./StatusContext";

interface StatusContextProps {
  children: ReactNode;
}

const StatusProvider = ({ children }: StatusContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   console.log("--------------------------------------");
  //   console.log(`StatusContext: ${JSON.stringify(state, null, 2)}`);
  //   console.log("--------------------------------------");
  // }, [state]);
  
  const startLoading = () => {
    dispatch({ type: "START_LOADING" });
  };
  
  const stopLoading = (payload: STATUS) => {
    dispatch({ type: "STOP_LOADING", payload });
  };
  
  const resetStatus = () => {
    dispatch({
      type: "RESET_STATUS",
      payload: "idle",
    });
  };
  
  const contextValue: StatusContextType = {
    state,
    startLoading,
    stopLoading,
    resetStatus
  };
  
  return (
    <StatusContext.Provider value={contextValue}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;