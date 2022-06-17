import React, { useState, useCallback, useReducer, useContext } from 'react';
import { View } from 'react-native';
import { Alert, TitleRow, ButtonRow, BottomNav, ButtonReturnYellow, FormItemInput } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';

const CadastroAtividade = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activity, setActivity] = useState({

  })

  const {travelDay, contextSetActivities} = useContext(UserContext)

  const checkRequiredField = useCallback(() => {
    if(activity.description === '' || activity.type === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [activity.description, activity.type, activity.value, activity.time, state]);

  const handlePostActivity = async () => {
    try {
      //erro aqui
      await api.requestCreate(travelDay.id, 'activity', activity);
      console.log("deu create")
      dispatch({type: actions.setMessage, payload: 'Viagem atualizada com sucesso!'});
      dispatch({type: actions.showAlert, payload: true });
    } catch (error) {
      dispatch({type: actions.setMessage, payload: error});
      dispatch({type: actions.showAlert, payload: true });
      console.log(error)
    } finally {
      dispatch({type: actions.toggleLoading});
    }
  }

  const handleConfirmButton = useCallback(() => {
      checkRequiredField();
      dispatch({type: actions.toggleLoading});
      handlePostActivity()
      contextSetActivities()
      navigation.navigate('Lista Atividades')
  }, [checkRequiredField])

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <Card width="90%" height={0.3}>
        <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Dias")} />
        <TitleRow text="Adicionar Nova Atividade" />
          <View
            style={{
              width: '100%',
              height:'80%',
              marginTop: 10,
              backgroundColor: 'whitesmoke',
              borderWidth: 1,
              borderRadius: 6,
              borderColor: "#DCDCDC",
              marginBottom:20,
          }}>
            <Spacer/>
            <FormItemInput
              required={true}
              placeholder="Descrição"
              defaultValue={activity.description ?? null}
              onChangeText={text => setActivity({ ...activity, description: text})}
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Tipo (ex: Alimentação, Lazer)"
              defaultValue={activity.type ?? null}
              onChangeText={text => setActivity({ ...activity, type: text})}
            />
            <Spacer />
            <FormItemInput
              placeholder="Valor"
              defaultValue={activity.value ?? null}
              onChangeText={text => setActivity({ ...activity, value: text})}
            />
            <Spacer />
            <FormItemInput
              placeholder="Horário"
              defaultValue={activity.time ?? null}
              onChangeText={text => setActivity({ ...activity, time: text})}
            />
            <Spacer />
          </View>
          <ButtonRow
            text="Cadastrar"
            onPress={() => handleConfirmButton()}
          />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default CadastroAtividade;