import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const Height = Dimensions.get('window').height;

export const Card = styled.View`
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    height: ${(props) => Height - (Height*props.height) || `${Height}`}px;
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || '0px 0 70px 0'};
    padding: ${(props) => props.padding || 16}px;
    border: ${(props) => props.border || 'none'}
    border-radius: 6px;
    background-color: ${(props) => props.bgColor || '#ffffff'};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;