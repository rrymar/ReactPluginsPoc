import { Container } from '../plugins/container';
import * as Constants from '../plugins/pluginsConstants';

import { pluggedFunc } from './pluggedFunc';
import { PluggedComponent } from './PluggedComponent';

const container = new Container();

container.register(Constants.SomeTextFunc, pluggedFunc);
container.register(Constants.SomeComponent, PluggedComponent);

export default container;