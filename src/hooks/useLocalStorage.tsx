import React, { useState, useEffect } from 'react';
import { SelectedInterface } from '../interfaces';

export function useLocalStorage(
  initialValue: object,
  key: string,
): [SelectedInterface, React.Dispatch<React.SetStateAction<SelectedInterface>>] {
  const getStorageItems = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [selected, setSelected] = useState<SelectedInterface>(getStorageItems);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(selected));
  }, [selected]);

  return [selected, setSelected];
}
