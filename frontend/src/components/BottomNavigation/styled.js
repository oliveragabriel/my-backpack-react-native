import styled from 'styled-components/native';

export const Label = styled.Text`
    padding: 3px;
    font-size: ${(props) => props.fontSize || 12}px;
    font-weight: ${(props) => props.fontWeight || '500'};
    text-align: center;
    text-transform: ${(props) => props.txtTransform || 'capitalize'};
    color: ${(props) => props.txtColor || '#FFFFFF'};
`;