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
import MinhasViagens from './src/pages/MinhasViagens/';
import ListaDias from './src/pages/ListaDias/ListaDias';
import CadastroDesejo from './src/pages/CadastroDesejo/CadastroDesejo';
import EditarDesejo from './src/pages/EditarDesejo/EditarDesejo'
import ListaDesejos from './src/pages/ListaDesejos';
import CadastroViagem from './src/pages/CadastroViagem/CadastroViagem';
import ListaAtividades from './src/pages/ListaAtividades/ListaAtividades';
import EditarAtividade from './src/pages/EditarAtividade/EditarAtividade';
import CadastroAtividade from './src/pages/CadastroAtividade/CadastroAtividade';
import AtividadeDetalhe from './src/pages/AtividadeDetalhe/AtividadeDetalhe';
import EditarTransporte from './src/pages/EditarTransporte/EditarTransporte';
import EditarHospedagem from './src/pages/EditarHospedagem/EditarHospedagem';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Acessar Conta'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Acessar Conta" component={AcessarConta} />
          <Stack.Screen name="Cadastro de Usuário" component={CadastroUsuario} />
          <Stack.Screen name="Esqueci Minha Senha" component={EsqueciMinhaSenha}/>
          <Stack.Screen name="Início" component={Inicio} />
          <Stack.Screen name="Viagem Detalhe" component={ViagemDetalhe} />
          <Stack.Screen name="Lista Dias" component={ListaDias} />
          <Stack.Screen name="Cadastro Viagem" component={CadastroViagem} />
          <Stack.Screen name="Minhas Viagens" component={MinhasViagens} />
          <Stack.Screen name="Editar Viagem" component={EditarViagem} />
          <Stack.Screen name="Lista Atividades" component={ListaAtividades} />
          <Stack.Screen name="Atividade Detalhe" component={AtividadeDetalhe} />
          <Stack.Screen name="Editar Atividade" component={EditarAtividade} />
          <Stack.Screen name="Cadastrar Atividade" component={CadastroAtividade} />
          <Stack.Screen name="Editar Transporte" component={EditarTransporte} />
          <Stack.Screen name="Editar Hospedagem" component={EditarHospedagem} />
          <Stack.Screen name="Minhas Conquistas" component={MinhasConquistas} />
          <Stack.Screen name="Meu Perfil" component={MeuPerfil} />
          <Stack.Screen name="Alterar Senha" component={AlterarSenha} />
          <Stack.Screen name="Lista Desejos" component={ListaDesejos} />
          <Stack.Screen name="Cadastro Desejo" component={CadastroDesejo} />
          <Stack.Screen name="Editar Desejo" component={EditarDesejo} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;