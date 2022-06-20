import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { UserContext } from '../../../UseContext/UserContext';
import { actionsId } from '../../../UseContext/reducer/actions';

export const ComponenteDias = ({ navigation, travelDays }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [nextPage, setNextPage] = useState({go: false});

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) dispatchId({type: actionsId.setTravelDayId, payload: nextPage.id});
        return () => {isMounted = false}
    }, [nextPage]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && nextPage.go) navigation.navigate("Lista Atividades");
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
                    Pressione o dia para detalhar suas atividades
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
                data={travelDays}
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
                    >{item.day}
                    </Text>
                    </TouchableOpacity>
                }/>
            </View> 
        </View>
    )
}