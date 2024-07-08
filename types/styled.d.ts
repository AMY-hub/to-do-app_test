/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { AppTheme } from '../src/styled/theme.interface';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {}
}
