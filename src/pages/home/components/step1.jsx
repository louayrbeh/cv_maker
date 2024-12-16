import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function StepOne({ data, onChange }) {
  const [champsAdditionnels, setChampsAdditionnels] = useState(
    data.champsAdditionnels || []
  );

  const handleSupprimerChamp = (id) => {
    const updatedChamps = champsAdditionnels.filter((champ) => champ.id !== id);
    setChampsAdditionnels(updatedChamps);
    onChange({ ...data, champsAdditionnels: updatedChamps });
  };

  const handleChangeChamp = (id, field, value) => {
    const updatedChamps = champsAdditionnels.map((champ) =>
      champ.id === id ? { ...champ, [field]: value } : champ
    );
    setChampsAdditionnels(updatedChamps);
    onChange({ ...data, champsAdditionnels: updatedChamps });
  };

  const handleAjouterChamp = () => {
    const newChamp = { id: Date.now(), titre: "", valeur: "" };
    const updatedChamps = [...champsAdditionnels, newChamp];
    setChampsAdditionnels(updatedChamps);
    onChange({ ...data, champsAdditionnels: updatedChamps });
  };

  const handleChangeField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom"
              size="small"
              variant="outlined"
              value={data.nom || ""}
              onChange={(e) => handleChangeField("nom", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Prénom"
              variant="outlined"
              value={data.prenom || ""}
              onChange={(e) => handleChangeField("prenom", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              fullWidth
              label="Titre"
              variant="outlined"
              value={data.titre || ""}
              onChange={(e) => handleChangeField("titre", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              variant="outlined"
              type="email"
              value={data.email || ""}
              onChange={(e) => handleChangeField("email", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Adresse"
              variant="outlined"
              value={data.adresse || ""}
              onChange={(e) => handleChangeField("adresse", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Numéro de téléphone"
              variant="outlined"
              type="tel"
              value={data.telephone || ""}
              onChange={(e) => handleChangeField("telephone", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Date de naissance"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={data.dateNaissance || ""}
              onChange={(e) =>
                handleChangeField("dateNaissance", e.target.value)
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            border: "1px dashed #ccc",
            height: "73%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Typography variant="body2">Ajouter votre photo</Typography>
        </Box>
      </Grid>

      {champsAdditionnels.map((champ) => (
        <React.Fragment key={champ.id}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Titre de champ"
              variant="outlined"
              value={champ.titre}
              onChange={(e) =>
                handleChangeChamp(champ.id, "titre", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Valeur de champ"
              variant="outlined"
              value={champ.valeur}
              onChange={(e) =>
                handleChangeChamp(champ.id, "valeur", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <IconButton
              color="secondary"
              onClick={() => handleSupprimerChamp(champ.id)}
            >
              <Delete />
            </IconButton>
          </Grid>
        </React.Fragment>
      ))}

      <Grid item xs={12} sm={8}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={handleAjouterChamp}
        >
          Ajouter un autre champ
        </Button>
      </Grid>
    </Grid>
  );
}
