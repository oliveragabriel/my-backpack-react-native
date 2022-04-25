import styled from 'styled-components/native';

export const ButtonText = styled.Text`
    font-size: ${(props) => props.fontSize || 16}px;
    font-weight: ${(props) => props.fontWeight || '900'};
    text-align: center;
    text-transform: ${(props) => props.txtTransform || 'capitalize'};
    color: ${(props) => props.txtColor || '#FFFFFF'};
`;