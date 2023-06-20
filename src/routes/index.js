import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Catalog from '../pages/Catalog'
import CatalogA from '../pages/CatalogA'
import AlteracaoSenha from '../pages/AlteracaoSenha'
import ConfirmacaoCadastro from '../pages/ConfirmacaoCadastro'
import ConfirmacaoCadastroCat from '../pages/ConfirmacaoCadastroCat'
import CadastroCategoria from '../pages/CadastroCategoria'
import CadastroModelo from '../pages/CadastroModelo'
import ConfirmacaoCadastroMod from '../pages/ConfirmacaoCadastroMod'
import EdicaoModelo from '../pages/EdicaoModelo'
import ConfirmacaoEdicaoModelo from '../pages/ConfirmacaoEdicaoModelo'
import ExclusaoModelo from '../pages/ExclusaoModelo'
import ConfirmacaoExclusaoModelo from '../pages/ConfirmacaoExclusaoModelo'
import EdicaoCategoria from '../pages/EdicaoCategoria'
import ConfirmacaoEdicaocategoria from '../pages/ConfirmacaoEdicaoCategoria'
import ExclusaoCategoria from '../pages/ExclusaoCategoria'
import ConfirmacaoExclusaoCategoria from '../pages/ConfirmacaoExclusaoCategoria'

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
            <Stack.Screen
                name="ConfirmacaoCadastroMod"
                component={ConfirmacaoCadastroMod}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="CadastroModelo"
                component={CadastroModelo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="EdicaoModelo"
                component={EdicaoModelo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmacaoEdicaoModelo"
                component={ConfirmacaoEdicaoModelo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExclusaoModelo"
                component={ExclusaoModelo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmacaoExclusaoModelo"
                component={ConfirmacaoExclusaoModelo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EdicaoCategoria"
                component={EdicaoCategoria}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmacaoEdicaoCategoria"
                component={ConfirmacaoEdicaocategoria}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExclusaoCategoria"
                component={ExclusaoCategoria}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmacaoExclusaoCategoria"
                component={ConfirmacaoExclusaoCategoria}
                options={{ headerShown: false }}
            />

            
        </Stack.Navigator>
    )
}