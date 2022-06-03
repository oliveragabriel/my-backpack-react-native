import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const Height = Dimensions.get('window').height - 60;

export const Container = styled.View`
    flex: 1;
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    position: ${(props) => props.position || 'relative'};
    z-index: ${(props) => props.zIndex || 1};
    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.txtColor || '#A29B9B'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || `${Height}`}px;
    padding: ${(props) => props.padding || 0}px;
    border: ${(props) => props.border || 'none'};
`;