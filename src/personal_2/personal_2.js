import './personal_2.scss';

import { SmartLighter } from './scripts/smart-lighter';
import { NewLighter } from './scripts/another-file';

const colors = ['red', 'yellow', 'green'];

//const lighter = new SmartLighter(document.querySelector('.content'), colors);

const lighter = new NewLighter(document.querySelector('.content'), colors);
