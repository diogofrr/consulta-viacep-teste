'use client'

import { createContext } from "react";
import initialState from "./data";
import { StopLoadingPayload } from "./reducer";

export interface StatusContextType {
  state: typeof initialState;
  startLoading: (payload: string) => void;
  stopLoading: (payload: StopLoadingPayload) => void;
  resetStatus: () => void;
}

export const StatusContext = createContext<StatusContextType | null>(null);