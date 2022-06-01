import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    height: ${(props) => props.height || 50}px;
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || 12}px;
    padding: ${(props) => props.padding || 15}px;
    border: ${(props) => props.border || '1px solid #085E7D'}
    border-radius: 6px;
    background-color: ${(props) => props.bgColor || '#008E89'};
    color: ${(props) => props.txtColor || 'black'}
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;