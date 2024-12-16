import React, { useEffect } from "react";
import { TextField, Button, IconButton, Grid, Divider } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export default function StepTwo({ data, onChange }) {
  // Récupère les diplômes en s'assurant qu'ils sont définis comme un tableau
  const diplomes = data.diplomes || [];

  // Fonction pour ajouter un autre diplôme
  const handleAjouterDiplome = () => {
    const newDiplome = {
      id: Date.now(),
      ecole: "",
      diplome: "",
      specialite: "",
      debut: "",
      fin: "",
    };
    const updatedDiplomes = [...diplomes, newDiplome];
    onChange({ ...data, diplomes: updatedDiplomes });
  };

  // Fonction pour mettre à jour un champ d'un diplôme
  const handleChangeDiplome = (id, field, value) => {
    const updatedDiplomes = diplomes.map((diplome) =>
      diplome.id === id ? { ...diplome, [field]: value } : diplome
    );
    onChange({ ...data, diplomes: updatedDiplomes });
  };

  // Fonction pour supprimer un diplôme (si plus d'un diplôme existe)
  const handleSupprimerDiplome = (id) => {
    if (diplomes.length > 1) {
      const updatedDiplomes = diplomes.filter((diplome) => diplome.id !== id);
      onChange({ ...data, diplomes: updatedDiplomes });
    } else {
      alert("Vous devez conserver au moins un formulaire.");
    }
  };
  useEffect(() => {
    if (!data.diplomes || data.diplomes.length === 0) {
      onChange({
        ...data,
        diplomes: [
          {
            id: Date.now(),
            ecole: "",
            diplome: "",
            specialite: "",
            debut: "",
            fin: "",
          },
        ],
      });
    }
  }, []);

  return (
    <Grid container spacing={3}>
      {diplomes.map((diplome) => (
        <React.Fragment key={diplome.id}>
          <Grid item xs={12} sm={11}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="École ou Faculté"
              variant="outlined"
              value={diplome.ecole}
              onChange={(e) =>
                handleChangeDiplome(diplome.id, "ecole", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton
              color="secondary"
              onClick={() => handleSupprimerDiplome(diplome.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Diplôme"
              variant="outlined"
              value={diplome.diplome}
              onChange={(e) =>
                handleChangeDiplome(diplome.id, "diplome", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={11}>
            <TextField
              fullWidth
              size="small"
              label="Spécialité"
              variant="outlined"
              value={diplome.specialite}
              onChange={(e) =>
                handleChangeDiplome(diplome.id, "specialite", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={5.5}>
            <TextField
              fullWidth
              size="small"
              label="Date de début"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={diplome.debut}
              onChange={(e) =>
                handleChangeDiplome(diplome.id, "debut", e.target.value)
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
              value={diplome.fin}
              onChange={(e) =>
                handleChangeDiplome(diplome.id, "fin", e.target.value)
              }
            />
          </Grid>
        </React.Fragment>
      ))}
      <Grid item xs={12} sm={11}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAjouterDiplome}
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
        >
          Ajouter un autre diplôme
        </Button>
      </Grid>
    </Grid>
  );
}
