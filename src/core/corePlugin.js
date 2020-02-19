import { Container } from '../plugins/container';
import * as Constants from '../plugins/pluginsConstants';

import { someFunc } from '../someFunc';

const container = new Container();

container.registerFunc(Constants.SomeTextFunc, someFunc);

export default container;