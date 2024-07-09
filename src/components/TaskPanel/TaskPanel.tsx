import { useCallback, useMemo, useState } from 'react';

import styled, { css } from 'styled-components';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Task } from '../../interface/Task';
import { appTheme } from '../../styled/appTheme';
import AddPanel from '../AddPanel/AddPanel';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskItem from '../TaskItem/TaskItem';
import { Button } from '../ui-kit/buttons/Button';
import { mediaBreakpointDown, vw } from '../ui-kit/functions/functions';
import { Text } from '../ui-kit/texts/text';

export const enum FilterOptions {
    ALL = 'All',
    COMPLETED = 'Completed',
    ACTIVE = 'Active',
}

export const TaskPanel = () => {
    const [tasksList, setTasksList] = useLocalStorage<Array<Task>>('to-do-app_tasks', []);
    const [filter, setFilter] = useState<FilterOptions>(FilterOptions.ALL);

    const tasksLeft = useMemo(() => tasksList.filter((t) => !t.done).length, [tasksList]);

    const clearCompleted = useCallback(() => {
        setTasksList((prevTasks) => prevTasks.filter((task) => !task.done));
    }, [setTasksList]);

    const deleteTask = useCallback(
        (id: string) => {
            setTasksList((prevTasks) => prevTasks.filter((task) => task.id !== id));
        },
        [setTasksList]
    );

    const changeDone = useCallback(
        (id: string) => {
            setTasksList((prevTasks) =>
                prevTasks.map((task) => {
                    return task.id === id ? { ...task, done: !task.done } : task;
                })
            );
        },
        [setTasksList]
    );

    const renderTasks = () => {
        let itemsToRender = tasksList;
        if (filter === FilterOptions.COMPLETED) {
            itemsToRender = tasksList.filter((t) => t.done);
        }
        if (filter === FilterOptions.ACTIVE) {
            itemsToRender = tasksList.filter((t) => !t.done);
        }
        return itemsToRender.map((task) => (
            <TaskItem key={task.id} task={task} changeDone={changeDone} deleteTask={deleteTask} />
        ));
    };

    const getCountText = () => {
        if (tasksList.length !== 0 && tasksLeft === 0) {
            return 'All done!';
        }

        return tasksLeft !== 0 ? `${tasksLeft} left` : '';
    };

    return (
        <Container>
            <AddPanel setTasksList={setTasksList} />
            <TaskFilter selectedOption={filter} setSelectedOption={setFilter} />
            <ListContainer>
                {tasksList.length ? (
                    <List>{renderTasks()}</List>
                ) : (
                    <Text as="p" font="heading2" color={appTheme.colors.darkGray}>
                        {"You don't have any tasks yet"}
                    </Text>
                )}
            </ListContainer>
            <BottomRow>
                <Text font="body" color={appTheme.colors.accent}>
                    {getCountText()}
                </Text>
                <Button
                    data-testid="task-clear"
                    disabled={!tasksList.some((t) => t.done)}
                    onClick={clearCompleted}
                    styles={css`
                        margin-left: auto;
                    `}
                >
                    Clear all done
                </Button>
            </BottomRow>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 24px;
`;

const BottomRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const ListContainer = styled.div`
    max-height: 500px;
    height: ${vw(300, appTheme.breakpoints.xLarge)};

    ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
        height: ${vw(300, appTheme.breakpoints.xMedium)};
    }

    ${mediaBreakpointDown(appTheme.breakpoints.Tablet)} {
        height: ${vw(300, appTheme.breakpoints.Tablet)};
    }

    ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
        height: ${vw(300, appTheme.breakpoints.xMobile)};
    }
`;

const List = styled.ul`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 80%;
    max-height: -webkit-fill-available;
    padding-right: 6px;

    &::-webkit-scrollbar {
        width: 6px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.extraLightGray};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.accentPale};
        background-position: center;
        background-repeat: no-repeat;
        height: 6px;
    }
`;
