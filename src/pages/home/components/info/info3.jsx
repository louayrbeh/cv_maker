import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor3() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box>
      <Typography>
        <strong>Section "Expériences professionnelles"</strong>
      </Typography>
      <Typography variant="body2">
        La section "Expériences professionnelles" est cruciale pour démontrer
        votre expertise et illustrer comment vos compétences peuvent bénéficier
        à un employeur. Voici quelques conseils pour remplir cette section de
        manière optimale :
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Titre de poste :</strong>Indiquez clairement l’intitulé du
            poste occupé (ex. : "Développeur Web", "Chef de Projet"). Cela
            permet aux recruteurs de comprendre rapidement votre rôle.
          </Typography>
          <Typography variant="body2">
            <strong>Lieu :</strong>Mentionnez l’entreprise ou l’organisation,
            ainsi que la ville ou le pays où vous avez travaillé.
          </Typography>
          <Typography variant="body2">
            <strong>Dates de début et de fin :</strong>Indiquez les périodes
            précises de chaque emploi. Si vous occupez encore ce poste,
            précisez-le avec "En cours".
          </Typography>
          <Typography variant="body2">
            <strong>Tâches et responsabilités :</strong>Décrivez brièvement les
            missions principales que vous avez effectuées, en mettant l’accent
            sur les réalisations et les résultats obtenus. Par exemple :
            "Création d’une application mobile augmentant la productivité de 20
            %". Ajoutez des tâches supplémentaires si nécessaire.
          </Typography>
          <Typography>
            Vous pouvez inclure plusieurs expériences en fonction de votre
            parcours professionnel. Veillez à les présenter dans l’ordre
            chronologique inverse (de la plus récente à la plus ancienne) pour
            mettre en avant vos expériences les plus pertinentes. Une section
            bien rédigée aide les recruteurs à visualiser votre impact dans vos
            précédents rôles et renforce votre candidature.
          </Typography>{" "}
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
