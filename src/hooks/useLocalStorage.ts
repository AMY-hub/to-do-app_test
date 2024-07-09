import { useCallback, useState } from 'react';

/* eslint-disable no-console */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prevValue: T) => T)) => void] {
    const [value, setValue] = useState<T>(getValueFromLS);

    function getValueFromLS() {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    }

    const saveValue = useCallback(
        (val: T | ((prevValue: T) => T)) => {
            try {
                setValue((prevValue) => {
                    const valueToStore = val instanceof Function ? val(prevValue) : val;
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                    return valueToStore;
                });
            } catch (error) {
                console.error(error);
            }
        },
        [key]
    );

    return [value, saveValue];
}
