import styled, { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { ThemeSelect } from '../components/ThemeSelect/ThemeSelect';
import { GlobalStyle } from '../styled/GlobalStyle';
import { appTheme } from '../styled/appTheme';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <GlobalStyle />
            <Container>
                <Header>
                    <ThemeSelect />
                </Header>
                <Main />
            </Container>
        </ThemeProvider>
    );
}

export default App;

const Container = styled.div`
    padding-bottom: 40px;
`;
