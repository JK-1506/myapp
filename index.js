/**
 * @format
 */

import { AppRegistry } from 'react-native';
import MainScreen from './android/app/src/screens/main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
