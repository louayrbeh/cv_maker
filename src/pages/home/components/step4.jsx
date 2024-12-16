import React, { useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid"; // Ajouter uuid pour des clés uniques

export default function StepFore({ data, onChange }) {
  const projets = data.projets || [];

  const handleAjouterprojet = () => {
    const newprojet = {
      id: uuidv4(),
      title: "",
      debut: "",
      fin: "",
      taches: [{ id: uuidv4(), role: "" }],
    };
    onChange({ ...data, projets: [...projets, newprojet] });
  };

  const handleChangeprojet = (id, field, value) => {
    const updatedprojets = projets.map((projet) =>
      projet.id === id ? { ...projet, [field]: value } : projet
    );
    onChange({ ...data, projets: updatedprojets });
  };

  const handleAjouterTache = (projetId) => {
    const updatedprojets = projets.map((projet) =>
      projet.id === projetId
        ? {
            ...projet,
            taches: [...(projet.taches || []), { id: uuidv4(), role: "" }],
          }
        : projet
    );
    onChange({ ...data, projets: updatedprojets });
  };

  const handleSupprimerprojet = (id) => {
    if (projets.length > 1) {
      onChange({
        ...data,
        projets: projets.filter((projet) => projet.id !== id),
      });
    } else {
      alert("Vous devez conserver au moins une expérience.");
    }
  };

  useEffect(() => {
    if (!data.projets || data.projets.length === 0) {
      handleAjouterprojet();
    }
  }, []); // Ajouter une expérience par défaut si aucune n'existe

  return (
    <Grid container spacing={3}>
      {projets.map((projet) => (
        <React.Fragment key={projet.id}>
          <Grid item xs={12} sm={11}>
            <Divider></Divider>
          </Grid>
          {/* Titre du poste */}
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Titre de projet"
              variant="outlined"
              value={projet.post}
              onChange={(e) =>
                handleChangeprojet(projet.id, "title", e.target.value)
              }
            />
          </Grid>
          {/* Bouton de suppression */}
          <Grid item xs={12} sm={1}>
            <IconButton
              aria-label="Supprimer ce projet"
              color="secondary"
              onClick={() => handleSupprimerprojet(projet.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          {/* Autres champs */}

          {/* Dates */}
          <Grid item xs={12} sm={5.5}>
            <TextField
              fullWidth
              size="small"
              label="Date de début"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={projet.debut}
              onChange={(e) =>
                handleChangeprojet(projet.id, "debut", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={5.5}>
            <TextField
              fullWidth
              size="small"
              label="Date de fin"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={projet.fin}
              onChange={(e) =>
                handleChangeprojet(projet.id, "fin", e.target.value)
              }
            />
          </Grid>

          {/* Tâches */}
          {projet.taches.map((tache) => (
            <Grid item xs={12} sm={11} key={tache.id}>
              <Box display="flex">
                <TextField
                  fullWidth
                  size="small"
                  label="Tâche / Rôle"
                  variant="outlined"
                  value={tache.role}
                  onChange={(e) =>
                    handleChangeprojet(
                      projet.id,
                      "taches",
                      projet.taches.map((t) =>
                        t.id === tache.id ? { ...t, role: e.target.value } : t
                      )
                    )
                  }
                />
                <IconButton
                  aria-label="Supprimer cette tâche"
                  color="secondary"
                  onClick={() =>
                    handleChangeprojet(
                      projet.id,
                      "taches",
                      projet.taches.filter((t) => t.id !== tache.id)
                    )
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}

          {/* Bouton Ajouter une tâche */}
          <Grid item xs={12} sm={11}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              onClick={() => handleAjouterTache(projet.id)}
            >
              Ajouter une autre tâche
            </Button>
          </Grid>
        </React.Fragment>
      ))}
      {/* Bouton Ajouter une expérience */}
      <Grid item xs={12} sm={11}>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={handleAjouterprojet}
        >
          Ajouter un autre projet
        </Button>
      </Grid>
    </Grid>
  );
}
