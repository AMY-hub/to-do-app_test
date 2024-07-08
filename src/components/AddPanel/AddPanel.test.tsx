import { render, screen, fireEvent } from '../../test-utils/customRender';
import { AddPanel } from './AddPanel';

describe('AddPanel', () => {
    it('renders without crashing', () => {
        render(<AddPanel setTasksList={jest.fn()} />);
        expect(screen.getByPlaceholderText('Type task text here...')).toBeInTheDocument();
    });

    it('enables the create button when input is not empty', () => {
        render(<AddPanel setTasksList={jest.fn()} />);
        const input = screen.getByTestId('task-input');
        const button = screen.getByTestId('task-submit');

        expect(button).toBeDisabled();
        fireEvent.change(input, { target: { value: 'New Task' } });
        expect(button).toBeEnabled();
    });

    it('calls setTasksList with new task on form submission', () => {
        const setTasksList = jest.fn();
        render(<AddPanel setTasksList={setTasksList} />);
        const input = screen.getByTestId('task-input');
        const button = screen.getByTestId('task-submit');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));
    });
});
