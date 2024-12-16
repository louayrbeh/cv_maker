import { useState, useCallback } from "react";
import { Button, IconButton, Grid, TextField } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export default function StepSix({ data, onChange }) {
  // Initialisation de l'état avec les compétences (sécurisé)
  const [competences, setCompetences] = useState(
    Array.isArray(data.competences)
      ? data.competences
      : [{ id: Date.now(), titre: "" }]
  );

  // Mise à jour d'une compétence
  const handleChangeCompetence = useCallback(
    (id, value) => {
      const updatedCompetences = competences.map((competence) =>
        competence.id === id ? { ...competence, titre: value } : competence
      );
      setCompetences(updatedCompetences);
      onChange({ ...data, competences: updatedCompetences }); // Envoi des données mises à jour au parent
    },
    [competences, data, onChange]
  );

  // Ajout d'une nouvelle compétence
  const handleAjouterCompetence = useCallback(() => {
    const newCompetence = { id: Date.now(), titre: "" };
    const updatedCompetences = [...competences, newCompetence];
    setCompetences(updatedCompetences);
    onChange({ ...data, competences: updatedCompetences });
  }, [competences, data, onChange]);

  // Suppression d'une compétence
  const handleSupprimerCompetence = useCallback(
    (id) => {
      if (competences.length > 1) {
        const updatedCompetences = competences.filter(
          (competence) => competence.id !== id
        );
        setCompetences(updatedCompetences);
        onChange({ ...data, competences: updatedCompetences });
      } else {
        alert("Vous devez conserver au moins une compétence.");
      }
    },
    [competences, data, onChange]
  );

  return (
    <Grid container spacing={3}>
      {competences.map((competence) => (
        <Grid
          container
          item
          spacing={2}
          key={competence.id}
          alignItems="center"
        >
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Titre compétence"
              variant="outlined"
              value={competence.titre}
              onChange={(e) =>
                handleChangeCompetence(competence.id, e.target.value)
              }
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              color="secondary"
              onClick={() => handleSupprimerCompetence(competence.id)}
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
          onClick={handleAjouterCompetence}
        >
          Ajouter une autre compétence
        </Button>
      </Grid>
    </Grid>
  );
}
