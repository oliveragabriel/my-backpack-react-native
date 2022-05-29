import styled from 'styled-components/native';

export const Input = styled.TextInput`
    height: ${(props) => props.height || 50}px; 
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || 2}px;
    padding: ${(props) => props.padding || 15}px;
    background-color: ${(props) => props.bgColor || '#F8F9FA'};
    border: ${(props) => props.border || '1px solid #E4E7EB'};
    border-radius: ${(props) => props.bRadius || 6}px;
    font-size: ${(props) => props.fSize || 16}px;
`;