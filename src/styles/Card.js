import styled from 'styled-components/native';

export const Card = styled.View`
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || '10px 0 10px 0'};
    padding: ${(props) => props.padding || 16}px;
    border: ${(props) => props.border || '1px solid #DCDCDC'}
    border-radius: 6px;
    background-color: ${(props) => props.bgColor || '#FFFFFF'};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;