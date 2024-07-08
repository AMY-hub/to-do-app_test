import styled from 'styled-components';

import { appTheme } from '../../styled/appTheme';
import { TaskPanel } from '../TaskPanel/TaskPanel';
import { mediaBreakpointDown } from '../ui-kit/functions/functions';

export const Main = () => {
    return (
        <MainContainer>
            <TaskPanel />
        </MainContainer>
    );
};

const MainContainer = styled.main`
    background-color: ${({ theme }) => theme.colors.mainLight};
    max-width: 700px;
    margin: 64px auto;
    padding: 64px;
    border-radius: ${({ theme }) => theme.border.l_radius};
    ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
        margin: 38px auto;
        padding: 38px;
    }

    ${mediaBreakpointDown(appTheme.breakpoints.Tablet)} {
        max-width: 100%;
        margin: 24px 16px;
        padding: 24px;
    }
`;
