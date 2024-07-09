import { renderHook, act, waitFor } from '@testing-library/react';

import { Task } from '../interface/Task';
import { useLocalStorage } from './useLocalStorage';

beforeAll(() => {
    const localStorageMock = (function () {
        let store: { [key: string]: string } = {};

        return {
            getItem(key: string) {
                return store[key] || null;
            },
            setItem(key: string, value: string) {
                store[key] = value.toString();
            },
            removeItem(key: string) {
                delete store[key];
            },
            clear() {
                store = {};
            },
        };
    })();

    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
    });
});
describe('useLocalStorage', () => {
    it('should update state based on previous value', async () => {
        const expectedValue = [
            { id: '1', text: 'Task 1', done: false },
            { id: '2', text: 'Task 2', done: false },
        ];

        const { result } = renderHook(() => useLocalStorage<Task[]>('test-key', []));

        expect(result.current[0]).toEqual([]);

        act(() => {
            result.current[1]((prev) => [...prev, expectedValue[0]]);
        });

        await waitFor(() => {
            expect(result.current[0]).toEqual([expectedValue[0]]);
        });

        act(() => {
            result.current[1]((prev) => [...prev, expectedValue[1]]);
        });

        await waitFor(() => {
            expect(result.current[0]).toEqual(expectedValue);
        });
    });
});
