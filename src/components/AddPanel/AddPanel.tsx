import { Dispatch, SetStateAction, useState } from 'react';
import { FormEventHandler } from 'react';

import styled from 'styled-components';

import { generateId } from '../../helpers/generateId';
import { Task } from '../../interface/Task';
import { appTheme } from '../../styled/appTheme';
import { Button } from '../ui-kit/buttons/Button';
import { mediaBreakpointDown } from '../ui-kit/functions/functions';

interface Props {
    setTasksList: Dispatch<SetStateAction<Task[]>>;
}

export const AddPanel = ({ setTasksList }: Props) => {
    const [text, setText] = useState<string>('');

    const createTask: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (text && text.trim()) {
            const id = generateId();
            const task = { id, text, done: false };
            setTasksList((list) => [...list, task]);
            setText('');
        }
    };

    return (
        <NewTaskForm onSubmit={createTask}>
            <TaskInput
                type="text"
                placeholder="Type task text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button disabled={!text.trim()} type="submit">
                Create
            </Button>
        </NewTaskForm>
    );
};

const NewTaskForm = styled.form`
    display: flex;
    align-items: stretch;
    gap: 16px;
    padding: 8px;
    font-size: inherit;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    color: ${({ theme }) => theme.colors.mainDark};
    box-shadow: ${({ theme }) => `0px 4px 11px 2px ${theme.colors.shadow}`};
`;

const TaskInput = styled.input`
    padding: 12px;
    width: 100%;
    font-size: inherit;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    color: ${({ theme }) => theme.colors.mainDark};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
    border-radius: ${({ theme }) => theme.border.m_radius};
    opacity: 0.6;
    transition: border 0.3s;

    &:focus {
        border: ${({ theme }) => `1px solid ${theme.colors.darkGray}`};
    }

    ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
        padding: 8px;
    }
`;
