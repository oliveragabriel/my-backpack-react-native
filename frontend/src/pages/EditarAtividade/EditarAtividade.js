import React, { useState, useCallback, useReducer, useContext } from 'react';
import { View } from 'react-native';
import { Alert, TitleRow, ButtonRow, CardEditarAtividade, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { actions } from './reducers/actions';
import { UserContext } from '../../UseContext/UserContext';
import { initialState, reducer } from './reducers/reducer';

const EditarAtividade = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {activity} = useContext(UserContext)

  const checkRequiredField = useCallback(() => {
    if(activity.description === '' || activity.type === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [activity.description, activity.type, activity.value, activity.time, state]);

  const handleConfirmButton = useCallback(() => {
      checkRequiredField();
      dispatch({type: actions.toggleLoading});
  }, [checkRequiredField])

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <Card width="90%" height={0.3}>
        <ButtonReturnYellow 
          marginBottom={10}
          iconName='west' 
          onPress={() => navigation.navigate("Lista Atividades")} 
            />
        <TitleRow text="Editar Atividade" />
          <View style={{
            width: "100%",
            }}>
            <CardEditarAtividade/>
            <ButtonRow
              text="Alterar"
              onPress={() => handleConfirmButton()}
            />
          </View>
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default EditarAtividade;