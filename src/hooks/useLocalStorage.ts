import { useCallback, useState } from 'react';

/* eslint-disable no-console */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
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
        (val: T) => {
            const valueToStore = val instanceof Function ? val(value) : val;
            try {
                setValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.error(error);
            }
        },
        [key, value]
    );

    return [value, saveValue];
}
