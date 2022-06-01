import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: ${(props) => props.fontSize || 20}px;
    font-weight: ${(props) => props.fontWeight || 'bold'};
    text-align: center;
    text-transform: ${(props) => props.txtTransform || 'uppercase'};
    color: ${(props) => props.txtColor || '#084594'};
`;