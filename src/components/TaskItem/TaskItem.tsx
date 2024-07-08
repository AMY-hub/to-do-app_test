import { memo } from 'react';

import styled, { css } from 'styled-components';

import { Task } from '../../interface/Task';
import { appTheme } from '../../styled/appTheme';
import { CloseButton } from '../ui-kit/buttons/CloseButton';
import { mediaBreakpointDown } from '../ui-kit/functions/functions';
import { Checkbox } from '../ui-kit/inputs/Checkbox';
import { Text } from '../ui-kit/texts/text';

interface Props {
    task: Task;
    changeDone: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskItem = ({ task, changeDone, deleteTask }: Props) => {
    const { id, text, done } = task;
    return (
        <ListItem>
            <Label>
                <Checkbox isCheck={done} onChange={() => changeDone(id)} data-testid="task-check" />
                <Text
                    as="p"
                    styles={css`
                        text-decoration: ${done ? 'line-through' : 'none'};
                    `}
                >
                    {text}
                </Text>
            </Label>
            <CloseButton onClick={() => deleteTask(id)} aria-label="Delete task" data-testid="task-delete" />
        </ListItem>
    );
};

export default memo(TaskItem);

const ListItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.accentPale};
    border-radius: ${({ theme }) => theme.border.s_radius};
    padding: 12px;

    ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
        padding: 8px;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;

    ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
        gap: 8px;
    }
`;
