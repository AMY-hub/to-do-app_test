import React, { ReactNode } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { appTheme } from '../styled/appTheme';

const AllTheProviders = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
