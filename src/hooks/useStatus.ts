import { StatusContext } from '@/context/Status/StatusContext';
import { useContext } from 'react';

export type STATUS = 'loading' | 'error' | 'success' | 'idle'

export enum StatusEnum {
  Loading = "loading",
  Idle = "idle",
  Error = "error",
  Success = "success"
}

const useStatus = () => {
  const context = useContext(StatusContext)
  if (!context) throw new Error("Context not loaded.")

  const { startLoading, resetStatus, state, stopLoading } = context

  const setLoading = (msg: string) => {
    startLoading(msg ?? "")
  };

  const setError = (errorMessage: string) => {
    stopLoading({
      status: StatusEnum.Error,
      msg: errorMessage
    })
  };

  const setSuccess = (successMessage: string) => {
    stopLoading({
      status: StatusEnum.Success,
      msg: successMessage
    })
  };

  const setIdle = () => {
    resetStatus()
  };

  return {
    status: state,
    setLoading,
    setError,
    setSuccess,
    setIdle,
  };
};

export default useStatus;