import { render, screen, fireEvent } from '../../test-utils/customRender';
import { FilterOptions } from '../TaskPanel/TaskPanel';
import { TaskFilter } from './TaskFilter';

describe('TaskFilter', () => {
    it('renders successfully', () => {
        render(<TaskFilter selectedOption={FilterOptions.ALL} setSelectedOption={jest.fn()} />);
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();
        expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('calls setSelectedOption with the correct option when clicked', () => {
        const setSelectedOption = jest.fn();
        render(<TaskFilter selectedOption={FilterOptions.ALL} setSelectedOption={setSelectedOption} />);

        fireEvent.click(screen.getByText('Completed'));
        expect(setSelectedOption).toHaveBeenCalledWith(FilterOptions.COMPLETED);

        fireEvent.click(screen.getByText('Active'));
        expect(setSelectedOption).toHaveBeenCalledWith(FilterOptions.ACTIVE);
    });
});
