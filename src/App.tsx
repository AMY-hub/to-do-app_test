import { lazy } from 'react';
import { Container } from './components/Container';
const DatesCarousel = lazy(() => import(/* webpackChunkName: "DatesCarousel" */ './components/DatesCarousel')
    .then(module => ({ default: module.DatesCarousel })));
// import { DatesCarousel } from './components/DatesCarousel';
import './styles/reset.scss';
import './App.scss';

import { timePeriods, timePeriods2 } from './assets/data/TimePeriods';

export const App = (): JSX.Element => {
    return (
        <Container>
            <DatesCarousel
                timePeriods={timePeriods}
                carouselTitle={<>Исторические<br />даты</>}
                carouselId='dates_1'
            />
            <DatesCarousel
                timePeriods={timePeriods2}
                carouselTitle={<>Исторические<br />даты</>}
                carouselId='dates_2'
            />
        </Container>
    );
};
