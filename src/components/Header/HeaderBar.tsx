import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Save, Add, Search, Close } from "@mui/icons-material";
import {
  containerStyle,
  boxStyle,
  searchBarStyle,
  buttonContainerStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from "./HeaderBar.styles";
import { SearchBar } from "../Bar/SearchBar";
import { MainBar } from "../Bar/MainBar";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

export const HeaderBar: React.FC = () => {
  const {
    newPhrase,
    setNewPhrase,
    editId,
    addPhrase,
    editPhrase,
    stopEditing,
  } = usePhrase();

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSave = () => {
    if (newPhrase.trim()) {
      if (editId) {
        editPhrase(editId, newPhrase);
        stopEditing();
      } else {
        addPhrase(newPhrase);
      }
      setNewPhrase("");
    }
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

        {searchVisible && <SearchBar />}
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
