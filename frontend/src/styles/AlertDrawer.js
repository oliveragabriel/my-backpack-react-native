import styled from 'styled-components/native';

export const AlertDrawer = styled.TouchableOpacity`
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    background-color: ${(props) => props.bgColor || '#DF6E6E'};
    color: ${(props) => props.txtColor || '#000000'};
    height: ${(props) => props.height || 90}px;
    width: ${(props) => props.width || '100%'};
    padding: ${(props) => props.padding || 6}px;
    position: ${(props) => props.position || 'absolute'};
    z-index: ${(props) => props.zIndex || 3};
    top: ${(props) => props.top || 0};
`;