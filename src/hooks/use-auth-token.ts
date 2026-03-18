import { useState, useEffect } from 'react';

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('auth_token'));

  const saveToken = (newToken: string) => {
    localStorage.setItem('auth_token', newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem('auth_token');
    setToken(null);
  };

  return { token, saveToken, clearToken };
};
