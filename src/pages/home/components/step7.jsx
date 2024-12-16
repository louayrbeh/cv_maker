import { useState } from "react";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export default function StepSeven({ data, onChange }) {
  // Initialisation de l'état avec les loisirs (sécurisé)
  const [loisirs, setLoisirs] = useState(
    Array.isArray(data.loisirs) ? data.loisirs : [{ id: Date.now(), titre: "" }]
  );

  // Mise à jour d'un loisir
  const handleChangeLoisir = (id, value) => {
    const updatedLoisirs = loisirs.map((loisir) =>
      loisir.id === id ? { ...loisir, titre: value } : loisir
    );
    setLoisirs(updatedLoisirs);
    onChange({ ...data, loisirs: updatedLoisirs }); // Envoi des données mises à jour au parent
  };

  // Ajout d'un nouveau loisir
  const handleAjouterLoisir = () => {
    const newLoisir = { id: Date.now(), titre: "" };
    const updatedLoisirs = [...loisirs, newLoisir];
    setLoisirs(updatedLoisirs);
    onChange({ ...data, loisirs: updatedLoisirs });
  };

  // Suppression d'un loisir
  const handleSupprimerLoisir = (id) => {
    if (loisirs.length > 1) {
      const updatedLoisirs = loisirs.filter((loisir) => loisir.id !== id);
      setLoisirs(updatedLoisirs);
      onChange({ ...data, loisirs: updatedLoisirs });
    } else {
      alert("Vous devez conserver au moins un loisir.");
    }
  };

  return (
    <Grid container spacing={3}>
      {loisirs.map((loisir) => (
        <Grid container item spacing={2} key={loisir.id} alignItems="center">
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Titre loisir"
              variant="outlined"
              value={loisir.titre}
              onChange={(e) => handleChangeLoisir(loisir.id, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton
              color="secondary"
              onClick={() => handleSupprimerLoisir(loisir.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} sm={11}>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={handleAjouterLoisir}
        >
          Ajouter un autre loisir
        </Button>
      </Grid>
    </Grid>
  );
}
