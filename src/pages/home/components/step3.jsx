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

export default function StepThree({ data, onChange }) {
  const experiences = data.experiences || [];

  const handleAjouterExperience = () => {
    const newExperience = {
      id: uuidv4(),
      post: "",
      lieu: "",
      debut: "",
      fin: "",
      taches: [{ id: uuidv4(), role: "" }],
    };
    onChange({ ...data, experiences: [...experiences, newExperience] });
  };

  const handleChangeExperience = (id, field, value) => {
    const updatedExperiences = experiences.map((experience) =>
      experience.id === id ? { ...experience, [field]: value } : experience
    );
    onChange({ ...data, experiences: updatedExperiences });
  };

  const handleAjouterTache = (experienceId) => {
    const updatedExperiences = experiences.map((experience) =>
      experience.id === experienceId
        ? {
            ...experience,
            taches: [...(experience.taches || []), { id: uuidv4(), role: "" }],
          }
        : experience
    );
    onChange({ ...data, experiences: updatedExperiences });
  };

  const handleSupprimerExperience = (id) => {
    if (experiences.length > 1) {
      onChange({
        ...data,
        experiences: experiences.filter((experience) => experience.id !== id),
      });
    } else {
      alert("Vous devez conserver au moins une expérience.");
    }
  };

  useEffect(() => {
    if (!data.experiences || data.experiences.length === 0) {
      handleAjouterExperience();
    }
  }, []); // Ajouter une expérience par défaut si aucune n'existe

  return (
    <Grid container spacing={3}>
      {experiences.map((experience) => (
        <React.Fragment key={experience.id}>
          <Grid item xs={12} sm={11}>
            <Divider></Divider>
          </Grid>
          {/* Titre du poste */}
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Titre de poste"
              variant="outlined"
              value={experience.post}
              onChange={(e) =>
                handleChangeExperience(experience.id, "post", e.target.value)
              }
            />
          </Grid>
          {/* Bouton de suppression */}
          <Grid item xs={12} sm={1}>
            <IconButton
              aria-label="Supprimer cette expérience"
              color="secondary"
              onClick={() => handleSupprimerExperience(experience.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          {/* Autres champs */}
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Lieu"
              variant="outlined"
              value={experience.lieu}
              onChange={(e) =>
                handleChangeExperience(experience.id, "lieu", e.target.value)
              }
            />
          </Grid>
          {/* Dates */}
          <Grid item xs={12} sm={5.5}>
            <TextField
              fullWidth
              size="small"
              label="Date de début"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={experience.debut}
              onChange={(e) =>
                handleChangeExperience(experience.id, "debut", e.target.value)
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
              value={experience.fin}
              onChange={(e) =>
                handleChangeExperience(experience.id, "fin", e.target.value)
              }
            />
          </Grid>

          {/* Tâches */}
          {experience.taches.map((tache) => (
            <Grid item xs={12} sm={11} key={tache.id}>
              <Box display="flex">
                <TextField
                  fullWidth
                  size="small"
                  label="Tâche / Rôle"
                  variant="outlined"
                  value={tache.role}
                  onChange={(e) =>
                    handleChangeExperience(
                      experience.id,
                      "taches",
                      experience.taches.map((t) =>
                        t.id === tache.id ? { ...t, role: e.target.value } : t
                      )
                    )
                  }
                />
                <IconButton
                  aria-label="Supprimer cette tâche"
                  color="secondary"
                  onClick={() =>
                    handleChangeExperience(
                      experience.id,
                      "taches",
                      experience.taches.filter((t) => t.id !== tache.id)
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
              onClick={() => handleAjouterTache(experience.id)}
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
          onClick={handleAjouterExperience}
        >
          Ajouter une autre expérience
        </Button>
      </Grid>
    </Grid>
  );
}
