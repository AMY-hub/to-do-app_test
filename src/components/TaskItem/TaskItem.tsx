import styled, { css } from 'styled-components';

import { Task } from '../../interface/Task';
import { CloseButton } from '../ui-kit/buttons/CloseButton';
import { Checkbox } from '../ui-kit/inputs/Checkbox';
import { Text } from '../ui-kit/texts/text';

interface Props {
    task: Task;
    changeDone: (id: string) => void;
    deleteTask: (id: string) => void;
}

export const TaskItem = ({ task, changeDone, deleteTask }: Props) => {
    const { id, text, done } = task;

    return (
        <ListItem>
            <Label>
                <Checkbox isCheck={done} onChange={() => changeDone(id)} />
                <Text
                    as="p"
                    styles={css`
                        text-decoration: ${done ? 'line-through' : 'none'};
                    `}
                >
                    {text}
                </Text>
            </Label>
            <CloseButton onClick={() => deleteTask(id)} aria-label="Delete task" />
        </ListItem>
    );
};

const ListItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.accentPale};
    border-radius: ${({ theme }) => theme.border.s_radius};
    padding: 12px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
`;
