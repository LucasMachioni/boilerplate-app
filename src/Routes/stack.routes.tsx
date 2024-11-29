import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

import Login from '../screens/Login';
import RecoveryPassword from '../screens/RecoveryPassword';

export function InicialStackRoutes() {
    return(
        <Navigator>
            <Screen 
            name='login'
            component={Login}
            options={{ headerShown: false }}
            />

            <Screen 
            name='recovery'
            component={RecoveryPassword}
            options={{ headerShown: false }}
            />
        </Navigator>
    )
}