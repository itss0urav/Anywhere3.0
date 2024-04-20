/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const useSessionStorage = (key: string): [any, (value: any) => void] => {
  const [data, setData] = useState<any>(() => {
    try {
      // Get from local storage by key
      const item = window.sessionStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : null;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return null;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(data) : value;
      // Save state
      setData(valueToStore);
      // Save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [data, setValue];
};

export default useSessionStorage;
