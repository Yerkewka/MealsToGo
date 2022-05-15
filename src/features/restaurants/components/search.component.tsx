import { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { CustomThemeProps } from "../../../infrastructure/theme";
import { LocationsContext } from "../../../services/locations/locations.context";

const SearchContainer = styled.View<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search: React.FC = () => {
  const { searchTerm, search } = useContext(LocationsContext);

  const [searchKeyword, setSearchKeyword] = useState<string>(searchTerm);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={async () => await search(searchKeyword)}
      />
    </SearchContainer>
  );
};
