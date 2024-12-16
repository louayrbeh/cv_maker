import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor2() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box>
      <Typography>
        <strong>Section "Formation"</strong>
      </Typography>
      <Typography variant="body2">
        La section "Formation" est essentielle pour mettre en avant votre
        parcours académique et vos qualifications. Elle aide les recruteurs à
        évaluer vos compétences techniques et théoriques, ainsi que votre niveau
        d’éducation. Voici comment remplir cette section efficacement :
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>École ou Faculté :</strong>Indiquez le nom de
            l’établissement où vous avez suivi votre formation (ex. :
            université, école d’ingénieurs, etc.).
          </Typography>
          <Typography variant="body2">
            <strong>Diplôme :</strong>Mentionnez le diplôme obtenu ou en cours
            (ex. : Licence, Master, BTS).
          </Typography>
          <Typography variant="body2">
            <strong>Spécialité :</strong>Précisez la spécialité ou le domaine
            d’études (ex. : Informatique, Génie Mécanique).
          </Typography>
          <Typography variant="body2">
            <strong>Dates de début et de fin :</strong>Indiquez clairement les
            périodes de formation. Cela montre votre progression dans le temps
            et la durée de vos études. Si la formation est en cours, précisez
            simplement la date de début et laissez la date de fin vide ou
            ajoutez "en cours".
          </Typography>
          <Typography>
            Vous pouvez également ajouter plusieurs formations si nécessaire, en
            fonction de votre parcours. Prenez soin de lister vos formations de
            manière chronologique inverse (de la plus récente à la plus
            ancienne) pour mettre en valeur vos qualifications les plus
            récentes. Une présentation claire et précise de cette section
            renforce l’impact professionnel de votre CV.
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
