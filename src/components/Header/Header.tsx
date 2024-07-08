import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { appTheme } from '../../styled/appTheme';
import { Title1 } from '../ui-kit/texts/heading';

export const Header = ({ children }: PropsWithChildren) => {
    return (
        <HeaderContainer>
            <HeaderRow>
                <Title1 $color={appTheme.colors.mainLight}>ToDoList</Title1>
                {children}
            </HeaderRow>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    color: ${({ theme }) => theme.colors.mainLight};
`;

const HeaderRow = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.3em;
    padding-right: 1em;
    padding-left: 1em;
`;
