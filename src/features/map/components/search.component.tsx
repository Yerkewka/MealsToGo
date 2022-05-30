import { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { CustomThemeProps } from "../../../infrastructure/theme";
import { LocationsContext } from "../../../services/locations/locations.context";

const SearchContainer = styled.View<CustomThemeProps>`
  z-index: 999;
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: ${(props) => props.theme.space[4]};
  width: 100%;
`;

export const Search: React.FC = () => {
  const { searchTerm, search } = useContext(LocationsContext);

  const [searchKeyword, setSearchKeyword] = useState<string>(searchTerm);

  useEffect(() => {
    setSearchKeyword(searchTerm);
  }, [searchTerm]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        icon="map"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={async () => await search(searchKeyword)}
      />
    </SearchContainer>
  );
};
