import { Container } from '../plugins/container';
import * as Constants from '../plugins/pluginsConstants';

import { pluggedFunc } from './pluggedFunc';

const container = new Container();

container.registerFunc(Constants.SomeTextFunc, pluggedFunc);

export default container;