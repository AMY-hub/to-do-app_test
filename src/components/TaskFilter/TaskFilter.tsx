import styled from 'styled-components';

import { FilterOptions } from '../TaskPanel/TaskPanel';
import { typography } from '../ui-kit/typography/typography';

interface Props {
    selectedOption: FilterOptions;
    setSelectedOption: (o: FilterOptions) => void;
}

export const TaskFilter = ({ selectedOption, setSelectedOption }: Props) => {
    return (
        <Container>
            <Option
                data-testid="filter-all"
                $selected={selectedOption === FilterOptions.ALL}
                onClick={() => setSelectedOption(FilterOptions.ALL)}
            >
                All
            </Option>
            <Option
                data-testid="filter-completed"
                $selected={selectedOption === FilterOptions.COMPLETED}
                onClick={() => setSelectedOption(FilterOptions.COMPLETED)}
            >
                Completed
            </Option>
            <Option
                data-testid="filter-active"
                $selected={selectedOption === FilterOptions.ACTIVE}
                onClick={() => setSelectedOption(FilterOptions.ACTIVE)}
            >
                Active
            </Option>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
`;

const Option = styled.button<{ $selected: boolean }>`
    ${typography.heading3};
    padding: 2px 6px;
    border: ${({ theme, $selected }) => ($selected ? `1px solid ${theme.colors.accent}` : `1px solid transparent`)};
    border-radius: ${({ theme }) => theme.border.s_radius};
    color: ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.darkGray)};
`;
