import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Container, Input } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FormItemInput = (props) => {
    // const [security, setSecurity] = useState(secureTextEntry);

    const handlerInputColor = (checked) => {
      if(checked === "valid"){
        return (
          <View 
            style={{ 
                width: '102%',
                position: 'absolute',  
                zIndex: -1, 
                height: 55,
                borderRadius: 6,
                backgroundColor: 'green',
                opacity: 0.5
            }}
          >
          </View>
        )
      } else if (checked === "invalid") {
        return (
          <View 
            style={{ 
                width: '102%',
                position: 'absolute',  
                zIndex: -1, 
                height: 55,
                borderRadius: 6,
                backgroundColor: 'red',
                opacity: 0.5
            }}
          >
          </View>
        )
      } 
      return (
        <View 
          style={{ 
              width: '102%',
              position: 'absolute',  
              zIndex: -1, 
              height: 55,
              borderRadius: 6,
              backgroundColor: 'transparent',
              opacity: 0.5
          }}
        >
        </View>
      )
    }

    return (
        <Container border="none">
            {props.required && (
                <View 
                  style={{ 
                      width: '100%', 
                      position: 'absolute', 
                      fontWeight: 'bold', 
                      textAlign: 'right', 
                      height: 80}}>
                  <Text style={{ color: '#FF0303'}}>*</Text>
                </View>)}
            <Input
                {...props}
                placeholderTextColor="#7B8794"
                // secureTextEntry={secureTextEntry}
            />
            
                <Icon 
                    name={props.iconName}
                    color="#7B8794"
                    size={26} 
                    style={{ 
                        position: 'absolute',
                        left: 270,
                        top: 12,
                    }}/>
                {/* {secureTextEntry && (
                    <TouchableOpacity onPress={() => setSecurity(!security)}>
                        <Icon 
                            name={security ? 'eye' : 'eye-off'}
                            color="#7B8794"
                            size={26}
                            style={{ 
                                position: 'absolute',
                                right: 30,
                                top: 12,
                            }}  
                        />
                    </TouchableOpacity>
                )}  */}
           
            {handlerInputColor(props.checked)}
        </Container>
    )
};