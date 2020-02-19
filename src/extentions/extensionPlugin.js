import { Container } from '../plugins/container';
import * as Constants from '../plugins/pluginsConstants';

import { pluggedFunc } from './pluggedFunc';
import { PluggedComponent } from './PluggedComponent';

const container = new Container();

container.registerFunc(Constants.SomeTextFunc, pluggedFunc);
container.registerFunc(Constants.SomeComponent, PluggedComponent);

export default container;