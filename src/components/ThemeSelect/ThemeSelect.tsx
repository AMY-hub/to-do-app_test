import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styled, { css } from 'styled-components';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { Theme } from '../../interface/Theme';
import { appTheme } from '../../styled/appTheme';
import { mediaBreakpointDown } from '../ui-kit/functions/functions';
import { Text } from '../ui-kit/texts/text';

const options = [Theme.BLUE, Theme.GRAY, Theme.PEANUT];

export const ThemeSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useLocalStorage<Theme>('theme', Theme.BLUE);
    const ref = useRef<HTMLDivElement | null>(null);

    const toggleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    useOnClickOutside(ref, closeMenu);

    useEffect(() => {
        document.body.dataset.theme = selectedTheme;
    }, [selectedTheme]);

    const items = useMemo(
        () =>
            options.map((option) => {
                return (
                    <DropdownItem
                        $selected={selectedTheme === option}
                        onClick={() => {
                            setSelectedTheme(option);
                            toggleOpen();
                        }}
                        key={option}
                        data-theme={option}
                    >
                        <Marker />
                    </DropdownItem>
                );
            }),
        [selectedTheme, setSelectedTheme, toggleOpen]
    );

    return (
        <div ref={ref}>
            <DropdownHeader onClick={toggleOpen}>
                <Text font="heading2" color={appTheme.colors.mainLight}>
                    Theme
                </Text>
                <Marker />
            </DropdownHeader>
            {isOpen && (
                <DropdownContainer>
                    <DropdownList>{items}</DropdownList>
                </DropdownContainer>
            )}
        </div>
    );
};

const Marker = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.accentLight}`};
    background-color: ${({ theme }) => theme.colors.bg};
`;

const DropdownHeader = styled.button`
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.mainLight};
`;

const DropdownContainer = styled.div`
    position: relative;
`;

const DropdownList = styled.ul`
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 0.25em;
    right: 0;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.mainDark};
    background-color: ${({ theme }) => theme.colors.mainLight};
    box-shadow: ${({ theme }) => `4px 3px 8px ${theme.colors.shadow}`};

    ${mediaBreakpointDown(appTheme.breakpoints.Tablet)} {
        width: auto;
    }
`;

const DropdownItem = styled.li<{ $selected: boolean }>`
    cursor: pointer;
    padding: 0.5em;
    padding-left: 1em;
    border-radius: 10px;

    ${({ $selected }) =>
        $selected &&
        css`
            background-color: #5959591b;
        `}
`;
