/* eslint-disable react/display-name */
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Task } from '../../interface/Task';
import { render, screen, fireEvent } from '../../test-utils/customRender';
import { TaskPanel } from '../TaskPanel/TaskPanel';

jest.mock('../../hooks/useLocalStorage');

describe('TaskPanel', () => {
    beforeEach(() => {
        (useLocalStorage as jest.Mock).mockReturnValue([[], jest.fn()]);
    });

    it('renders without crashing', () => {
        render(<TaskPanel />);
        expect(screen.getByPlaceholderText('Type task text here...')).toBeInTheDocument();
        expect(screen.getByText("You don't have any tasks yet")).toBeInTheDocument();
    });

    it('can add tasks', () => {
        const setTasksList = jest.fn();
        (useLocalStorage as jest.Mock).mockReturnValue([[], setTasksList]);

        render(<TaskPanel />);
        const input = screen.getByTestId('task-input');
        const button = screen.getByTestId('task-submit');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));
    });

    it('can mark tasks as done', () => {
        const setTasksList = jest.fn();
        const initialTasks: Task[] = [{ id: '1', text: 'Test Task', done: false }];
        const expectedTasks: Task[] = [{ id: '1', text: 'Test Task', done: true }];
        (useLocalStorage as jest.Mock).mockReturnValue([initialTasks, setTasksList]);

        render(<TaskPanel />);
        fireEvent.click(screen.getByTestId('task-check'));

        expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));

        const clearCompletedFunction = setTasksList.mock.calls[0][0];
        const updatedTasks = clearCompletedFunction(initialTasks);

        expect(updatedTasks).toEqual(expectedTasks);
    });

    it('can delete tasks', () => {
        const setTasksList = jest.fn();
        const initialTasks: Task[] = [{ id: '1', text: 'Test Task', done: false }];
        (useLocalStorage as jest.Mock).mockReturnValue([initialTasks, setTasksList]);

        render(<TaskPanel />);
        fireEvent.click(screen.getByTestId('task-delete'));

        expect(setTasksList).toHaveBeenCalledWith(expect.arrayContaining([]));
    });

    it('can display counter', () => {
        const setTasksList = jest.fn();
        const initialTasks: Task[] = [
            { id: '1', text: 'Test Task', done: false },
            { id: '2', text: 'Test Task', done: true },
        ];
        (useLocalStorage as jest.Mock).mockReturnValue([initialTasks, setTasksList]);

        render(<TaskPanel />);

        expect(screen.getByText('1 left')).toBeInTheDocument();
    });

    it('can filter tasks', () => {
        const setTasksList = jest.fn();
        const initialTasks = [
            { id: '1', text: 'Task 1', done: false },
            { id: '2', text: 'Task 2', done: true },
            { id: '3', text: 'Task 3', done: false },
        ];

        (useLocalStorage as jest.Mock).mockReturnValue([initialTasks, setTasksList]);

        render(<TaskPanel />);

        // Initial
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();

        // Click on Completed filter
        fireEvent.click(screen.getByTestId('filter-completed'));
        expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.queryByText('Task 3')).not.toBeInTheDocument();

        // Click on Active filter
        fireEvent.click(screen.getByTestId('filter-active'));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();

        // Click on All filter
        fireEvent.click(screen.getByTestId('filter-all'));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();
    });

    it('can clear completed tasks', () => {
        const setTasksList = jest.fn();
        const initialTasks: Task[] = [
            { id: '1', text: 'Task 1', done: true },
            { id: '2', text: 'Task 2', done: false },
        ];
        const expectedTasks: Task[] = [{ id: '2', text: 'Task 2', done: false }];
        (useLocalStorage as jest.Mock).mockReturnValue([initialTasks, setTasksList]);

        render(<TaskPanel />);
        fireEvent.click(screen.getByTestId('task-clear'));

        expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));

        const clearCompletedFunction = setTasksList.mock.calls[0][0];
        const updatedTasks = clearCompletedFunction(initialTasks);

        expect(updatedTasks).toEqual(expectedTasks);
    });
});
