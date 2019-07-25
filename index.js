/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import signin from './src/pages/signin';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => signin);