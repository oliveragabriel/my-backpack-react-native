import React, { useEffect, useContext } from 'react';
import { BottomNav, TitleRow, Alert } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerConquista } from './Container';
// import { 
//   useSelector, 
//   useDispatch 
// } from 'react-redux';
import { UserContext } from '../../UseContext/UserContext';

const MinhasConquistas = ({ navigation }) => {
  const {conquest} = useContext(UserContext);
  //const dispatch = useDispatch();

  return (
    <>
      <Container bgColor="#293775">
        {/* {state.alert && (<Alert bgColor="#DF6E6E" message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)} */}
        <Card width="90%" height={0.25}>
        <TitleRow text="Minhas Conquistas" />
          <ContainerConquista value={`${conquest.qtdTravel}`} text={`Viagens Realizadas`}/>
          <Spacer />
          <ContainerConquista value={`${conquest.qtdCountry}`} text={`Países Visitados`}/>
          <Spacer />
          <ContainerConquista value={`${conquest.qtdCity}`} text={`Cidades Conhecidas`}/>
          <Spacer />
          <ContainerConquista value={`${conquest.qtdActivity}`} text={`Atividades Executadas`}/>
          <Spacer />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default MinhasConquistas;