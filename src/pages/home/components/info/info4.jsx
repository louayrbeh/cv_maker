import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor4() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box>
      <Typography>
        <strong>Section "Projets professionnels ou personnels"</strong>
      </Typography>
      <Typography variant="body2">
        Cette section vous permet de mettre en avant vos réalisations pratiques,
        qu'elles soient issues d'un cadre professionnel, académique ou
        personnel. Les projets permettent de démontrer vos compétences
        techniques, votre capacité à résoudre des problèmes et votre aptitude à
        collaborer sur des objectifs concrets. Voici quelques conseils pour bien
        la remplir .
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Titre du projet :</strong>Donnez un nom clair et pertinent à
            votre projet (ex. : "Développement d’une application e-commerce",
            "Création d’un portfolio interactif").
          </Typography>
          <Typography variant="body2">
            <strong>Dates de début et de fin :</strong>Indiquez la période
            pendant laquelle vous avez travaillé sur le projet. Si le projet est
            toujours en cours, précisez-le avec "En cours".
          </Typography>
          <Typography variant="body2">
            <strong>Tâches et responsabilités :</strong>Décrivez vos rôles dans
            le projet. Mettez en avant vos contributions spécifiques, comme
            "Développement front-end avec React", "Gestion de la base de données
            avec PostgreSQL" ou encore "Rédaction d’un rapport final". Soyez
            précis et ajoutez plusieurs tâches si nécessaire.
          </Typography>
          <Typography>
            Cette section est particulièrement utile pour les étudiants ou
            jeunes professionnels ayant peu d’expériences professionnelles. Une
            présentation détaillée de vos projets peut prouver vos compétences
            et votre initiative, même sans un historique de carrière conséquent.
          </Typography>
        </>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggleMore}
        sx={{
          fontSize: "16px", // Taille du texte
          padding: "10px 10px", // Espacement interne
          minWidth: "80px", // Largeur minimale
          minHeight: "40px", // Hauteur minimale
          marginBottom: 2,
          color: "#3f51b5", // Texte mauve
          borderColor: "#3f51b5", // Bordure mauve
          backgroundColor: "#ffffff", // Fond blanc
          "&:hover": {
            backgroundColor: "#3f51b5", // Fond mauve très clair au survol
            borderColor: "#4a0072", // Bordure mauve foncé au survol
            color: "#ffffff", // Texte mauve foncé au survol
          },
        }}
      >
        {showMore ? "Moins <<" : "Plus >>"}
      </Button>
    </Box>
  );
}
