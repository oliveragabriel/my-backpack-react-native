import styled from 'styled-components/native';

export const Spacer = styled.View`
    height: ${(props) => props.height || 10}px; 
    width: ${(props) => props.width || '100%'};
`;