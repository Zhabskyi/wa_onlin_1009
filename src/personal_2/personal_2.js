import './personal_2.scss';

import { SmartLighter } from './scripts/smart-lighter';

colors = ['red', 'yellow', 'green'];

const lighter = new SmartLighter(document.querySelector('.content'), colors);
