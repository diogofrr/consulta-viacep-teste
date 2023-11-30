'use client'

import { createContext } from "react";
import initialState from "./data";
import { STATUS } from "@/hooks/useStatus";

export interface StatusContextType {
  state: typeof initialState;
  startLoading: () => void;
  stopLoading: (payload: STATUS) => void;
  resetStatus: () => void;
}

export const StatusContext = createContext<StatusContextType | null>(null);