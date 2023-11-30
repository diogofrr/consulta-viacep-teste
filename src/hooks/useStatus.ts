import { useState } from 'react';

export type STATUS = 'loading' | 'error' | 'success' | 'idle'

export enum StatusEnum {
  Loading = "loading",
  Idle = "idle",
  Error = "error",
  Success = "success"
}

const useStatus = () => {
  const [status, setStatus] = useState<STATUS>('idle');
  const [error, setError] = useState<string | null>(null);

  const setLoading = () => {
    setStatus('loading');
    setError(null);
  };

  const setErrorStatus = (errorMessage: string) => {
    setStatus('error');
    setError(errorMessage);
  };

  const setSuccess = () => {
    setStatus('success');
    setError(null);
  };

  const setIdle = () => {
    setStatus('idle');
    setError(null);
  };

  return {
    status,
    error,
    setLoading,
    setErrorStatus,
    setSuccess,
    setIdle,
  };
};

export default useStatus;