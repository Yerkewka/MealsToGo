import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoaderContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const LoaderIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const Loader = () => (
  <LoaderContainer>
    <LoaderIndicator size={50} animating color={Colors.blue300} />
  </LoaderContainer>
);
