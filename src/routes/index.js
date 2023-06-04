import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Catalog from '../pages/Catalog'
import CatalogA from '../pages/CatalogA'
import AlteracaoSenha from '../pages/AlteracaoSenha'
import ConfirmacaoCadastro from '../pages/ConfirmacaoCadastro'
<<<<<<< HEAD
import ConfirmacaoCadastroCat from '../pages/ConfirmacaoCadastroCat'
import CadastroCategoria from '../pages/CadastroCategoria'
=======
>>>>>>> a735913ca27d2c85a0eb471d180d2f74346f1d13


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
            <Stack.Screen
                name="AlteracaoSenha"
                component={AlteracaoSenha}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmacaoCadastro"
                component={ConfirmacaoCadastro}
                options={{ headerShown: false }}
            />
<<<<<<< HEAD
            <Stack.Screen
                name="ConfirmacaoCadastroCat"
                component={ConfirmacaoCadastroCat}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="CadastroCategoria"
                component={CadastroCategoria}
                options={{ headerShown: false }}
            />

=======
>>>>>>> a735913ca27d2c85a0eb471d180d2f74346f1d13
            
        </Stack.Navigator>
    )
}