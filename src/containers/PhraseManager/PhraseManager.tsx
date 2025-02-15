import React, { useState } from "react";
import { usePhrase } from "../../context/PhraseContext/usePhrase";
import { Button, Box, Grid, Typography } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { PhraseSearch } from "../../renderProps/PhraseSearch";
import { SearchBar } from "../../components/SearchBar/SearchBar"; // Importamos el SearchBar

export const PhraseManager: React.FC = () => {
  const { addPhrase, removePhrase, editPhrase } = usePhrase();
  const [newPhrase, setNewPhrase] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleSave = () => {
    if (newPhrase.trim()) {
      if (editId) {
        editPhrase(editId, newPhrase);
        setEditId(null);
      } else {
        addPhrase(newPhrase);
      }
      setNewPhrase("");
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setNewPhrase(text);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Gestor de Frases
      </Typography>

      <SearchBar
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        placeholder="Agregar o editar frase"
      />

      <Button
        onClick={handleSave}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 3 }}
      >
        {editId ? "Guardar Cambios" : "Agregar"}
      </Button>

      <PhraseSearch>
        {(results, handleSearch, query) => (
          <>
            <SearchBar
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar frases"
            />

            <Grid container spacing={3}>
              {results.map((phrase) => (
                <Grid item xs={12} sm={6} md={3} key={phrase.id}>
                  <Card
                    content={phrase.text}
                    onEdit={() => handleEdit(phrase.id, phrase.text)}
                    onDelete={() => removePhrase(phrase.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </PhraseSearch>
    </Box>
  );
};
