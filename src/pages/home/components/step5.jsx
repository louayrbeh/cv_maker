import React, { useState } from "react";
import {
  Button,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const LangueEntry = ({ entry, index, onChange, onRemove }) => {
  const handleFieldChange = (field, value) => {
    onChange(index, { ...entry, [field]: value });
  };
  const commonStyles = {
    backgroundColor: "#f7f7f7", // Couleur de fond
    borderRadius: 2, // Coins arrondis
    "& .MuiOutlinedInput-root": {
      color: "#3f51b5", // Texte de l'input
      "& fieldset": {
        borderColor: "#000000", // Bordure par défaut
      },
      "&:hover fieldset": {
        borderColor: "#3f51b5", // Bordure au survol
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5", // Bordure en focus
      },
    },
    "& .MuiInputLabel-root": {
      color: "#000000", // Couleur du label par défaut
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#3f51b5", // Couleur du label en focus
    },
  };

  return (
    <>
      <Grid item xs={12} sm={5.5}>
        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          sx={commonStyles}
        >
          <InputLabel id={`langue-label-${index}`}>Langue</InputLabel>
          <Select
            labelId={`langue-label-${index}`}
            value={entry.langue}
            onChange={(e) => handleFieldChange("langue", e.target.value)}
            label="Langue"
          >
            <MenuItem value="français">Français</MenuItem>
            <MenuItem value="anglais">Anglais</MenuItem>
            <MenuItem value="espagnol">Espagnol</MenuItem>
            <MenuItem value="allemand">Allemand</MenuItem>
            <MenuItem value="italien">Italien</MenuItem>
            <MenuItem value="arabe">Arabe</MenuItem>
            <MenuItem value="chinois">Chinois</MenuItem>
            <MenuItem value="autre">Autre</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {entry.langue === "autre" && (
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            label="Autre langue"
            variant="outlined"
            value={entry.autreLangue}
            onChange={(e) => handleFieldChange("autreLangue", e.target.value)}
          />
        </Grid>
      )}

      <Grid item xs={12} sm={5.5}>
        <FormControl
          fullWidth
          variant="outlined"
          sx={commonStyles}
          size="small"
        >
          <InputLabel id={`niveau-label-${index}`}>Niveau</InputLabel>
          <Select
            labelId={`niveau-label-${index}`}
            value={entry.niveau}
            onChange={(e) => handleFieldChange("niveau", e.target.value)}
            label="Niveau"
          >
            <MenuItem value="débutant">Débutant</MenuItem>
            <MenuItem value="intermédiaire">Intermédiaire</MenuItem>
            <MenuItem value="avancé">Avancé</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={1}>
        <IconButton color="secondary" onClick={() => onRemove(index)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default function StepFive({ data, onChange }) {
  const [langues, setLangues] = useState(
    data.langues || [{ langue: "", autreLangue: "", niveau: "" }]
  );

  const handleUpdateLangue = (index, updatedLangue) => {
    const updatedLangues = [...langues];
    updatedLangues[index] = updatedLangue;
    setLangues(updatedLangues);
    onChange({ ...data, langues: updatedLangues });
  };

  const handleAddLangue = () => {
    const newLangue = { langue: "", autreLangue: "", niveau: "" };
    setLangues([...langues, newLangue]);
    onChange({ ...data, langues: [...langues, newLangue] });
  };

  const handleRemoveLangue = (index) => {
    if (langues.length > 1) {
      const updatedLangues = langues.filter((_, i) => i !== index);
      setLangues(updatedLangues);
      onChange({ ...data, langues: updatedLangues });
    } else {
      alert("Vous devez conserver au moins une langue.");
    }
  };

  return (
    <Grid container spacing={3}>
      {langues.map((langue, index) => (
        <LangueEntry
          key={index}
          index={index}
          entry={langue}
          onChange={handleUpdateLangue}
          onRemove={handleRemoveLangue}
        />
      ))}
      <Grid item xs={12} sm={11}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={handleAddLangue}
          fullWidth
        >
          Ajouter une autre langue
        </Button>
      </Grid>
    </Grid>
  );
}
