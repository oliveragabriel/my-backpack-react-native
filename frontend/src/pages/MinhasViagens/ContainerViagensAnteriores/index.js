import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

export const ContainerViagensAnteriores = ({navigation, travels}) => {
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
                            onPress={() => navigation.navigate("Viagem Detalhe", {id: item.id})}>
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