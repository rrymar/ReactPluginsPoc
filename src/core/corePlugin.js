import { Container } from '../plugins/container';
import * as Constants from '../plugins/pluginsConstants';

import { someFunc } from './someFunc';
import { CoreComponent } from './CoreComponent';

const container = new Container();

container.registerFunc(Constants.SomeTextFunc, someFunc);
container.registerFunc(Constants.SomeComponent, CoreComponent);

export default container;