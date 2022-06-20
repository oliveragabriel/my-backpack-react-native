import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { UserContext } from '../../../UseContext/UserContext';
import { actionsId } from '../../../UseContext/reducer/actions';

export const ComponenteListaAtividades = ({navigation, activities}) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [nextPage, setNextPage] = useState({go: false});

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) dispatchId({type: actionsId.setActivityId, payload: nextPage.id});
        return () => {isMounted = false}
    }, [nextPage]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) navigation.navigate("Atividade Detalhe");
        return () => {isMounted = false}
    }, [stateId]);

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height:'80%',
                marginTop: 10,
                backgroundColor: 'whitesmoke',
                borderWidth: 1,
                borderRadius: 6,
                borderColor: "#DCDCDC",
                marginBottom:20,
            }}>
            <View
                style={{
                    margin: 10,
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#084594",
                        textAlign: "center",
                    }}>
                    Pressione a atividade para ver seus detalhes
                </Text>
            </View>
            <View
                style={{
                position:'relative',
                height:'100%',
            }}>
                <FlatList
                    style={{
                        marginBottom:80,
                    }}
                    data={activities}
                    renderItem={({item}) => 
                        <TouchableOpacity
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: "90%",
                                alignSelf: 'center',
                                marginTop: 10,
                                padding: 8,
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 6,
                                borderColor: "#DCDCDC",
                            }}
                            onPress={() => setNextPage({go: true, id:item.id})}>
                            <Text
                                style={{
                                fontSize: 16,
                                fontWeight: '700',
                                textAlign: "center",
                                color: "#084594",
                                marginLeft: 4
                                }}
                            >{item.description}
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View> 
        </View>
    )
}