import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './src/UseContext/UserContext';
import AcessarConta from './src/pages/AcessarConta/AcessarConta';
import CadastroUsuario from './src/pages/CadastroUsuario/CadastroUsuario';
import EsqueciMinhaSenha from './src/pages/EsqueciMinhaSenha/EsqueciMinhaSenha';
import Inicio from './src/pages/Inicio';
import MinhasConquistas from './src/pages/MinhasConquistas/MinhasConquistas';
import MeuPerfil from './src/pages/MeuPerfil/MeuPerfil';
import AlterarSenha from './src/pages/AlterarSenha/AlterarSenha';
import ViagemDetalhe from './src/pages/ViagemDetalhe';
import EditarViagem from './src/pages/EditarViagem/EditarViagem'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Acessar Conta'>
          <Stack.Screen name="Acessar Conta" component={AcessarConta} />
          <Stack.Screen name="Cadastro de Usuário" component={CadastroUsuario} />
          <Stack.Screen name="Esqueci Minha Senha" component={EsqueciMinhaSenha} />
          <Stack.Screen name="Início" component={Inicio} />
          <Stack.Screen name="Viagem Detalhe" component={ViagemDetalhe} />
          <Stack.Screen name="Editar Viagem" component={EditarViagem} />
          <Stack.Screen name="Minhas Conquistas" component={MinhasConquistas} />
          <Stack.Screen name="Meu Perfil" component={MeuPerfil} />
          <Stack.Screen name="Alterar Senha" component={AlterarSenha} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;