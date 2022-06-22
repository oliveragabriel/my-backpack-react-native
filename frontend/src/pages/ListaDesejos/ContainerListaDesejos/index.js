import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

export const ContainerListaDesejos = ({ wishes, navigation }) => {
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
            }}
        >
            <View
                style={{
                margin: 10,
                }}
            >
                <Text
                style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#084594",
                    textAlign: "center",
                }}
                >
                Pressione o desejo para editar
                </Text>
            </View>
            <View
                style={{
                position:'relative',
                height:'100%'
                }}>
                    <FlatList
                        data={wishes}
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
                            onPress={() => navigation.navigate('Editar Desejo', {id: item.id})} >
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
                    }/>
            </View> 
        </View>
)}