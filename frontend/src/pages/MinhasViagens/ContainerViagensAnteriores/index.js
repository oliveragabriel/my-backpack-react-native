import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { UserContext } from '../../../UseContext/UserContext';
import { actionsId } from '../../../UseContext/reducer/actions';

export const ContainerViagensAnteriores = ({navigation, travels}) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [nextPage, setNextPage] = useState({go: false});

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) dispatchId({type: actionsId.setTravelId, payload: nextPage.id});
        return () => {isMounted = false}
    }, [nextPage]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) navigation.navigate("Viagem Detalhe");
        return () => {isMounted = false}
    }, [stateId]);

    return (

        <View style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height:'40%',
            marginTop: 10,
            backgroundColor: 'whitesmoke',
            borderWidth: 1,
            borderRadius: 6,
            borderColor: "#DCDCDC",
        }}>
            <View style={{margin: 10}}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#084594",
                    textAlign: "center",
                    textTransform: "uppercase",
                }}>
                    Viagens Anteriores
                </Text>
            </View>
            <View>
                <FlatList
                    style={{
                        marginBottom:50,
                    }}
                    data={travels}
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
                            onPress={() => setNextPage({go: true, id: item.id})}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '700',
                                    textAlign: "center",
                                    color: "#084594",
                                    marginLeft: 4
                                }}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    }/>
            </View>
        </View>
)}