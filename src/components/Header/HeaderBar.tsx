import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Save, Add, Search, Close } from "@mui/icons-material";
import {
  containerStyle,
  boxStyle,
  searchBarStyle,
  buttonContainerStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle
} from './HeaderBar.styles';
import { SearchBar } from "../Bar/SearchBar";
import { MainBar } from "../Bar/MainBar";

interface HeaderBarProps {
  newPhrase: string;
  setNewPhrase: (phrase: string) => void;
  editId: string | null;
  handleSave: () => void;
  handleEdit: (id: string, text: string) => void;
  removePhrase: (id: string) => void;
  handleSearch: (query: string) => void;
  query: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  newPhrase,
  setNewPhrase,
  editId,
  handleSave,
  handleSearch,
  query,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={boxStyle}>
        <Box sx={searchBarStyle(searchVisible)}>
          <MainBar
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder="Agregar frase"
          />
        </Box>

        {searchVisible && (
           <SearchBar
           query={query}
           handleSearch={handleSearch}
         />
        )}
      </Box>

      <Box sx={buttonContainerStyle}>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          sx={buttonPrimaryStyle}
        >
          {editId ? <Save /> : <Add />}
        </Button>
        <Button
          onClick={toggleSearch}
          variant="contained"
          color="secondary"
          sx={buttonSecondaryStyle}
        >
          {searchVisible ? <Close /> : <Search />}
        </Button>
      </Box>
    </Box>
  );
};