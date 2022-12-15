import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Dimensions.get('window').width

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    justify-content:flex-end;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px; 
    background-color: ${({theme: { colors }, active}) => active ? colors.title : colors.shape};
    border-radius: 3px;
    margin-right: 8px;
`;

export const CarImageWrapper = styled.View`
    width: ${width}px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CarImage = styled.Image`
    width: 280px;
    height: 132px;
`