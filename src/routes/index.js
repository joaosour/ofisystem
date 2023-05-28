import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Catalog from '../pages/Catalog'
import CatalogA from '../pages/CatalogA'


const Stack = createNativeStackNavigator();

export default function Routes() { 
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Catalog"
                component={Catalog}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CatalogA"
                component={CatalogA}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}