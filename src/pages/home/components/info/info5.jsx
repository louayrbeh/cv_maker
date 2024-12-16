import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor5() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box>
      <Typography>
        <strong>Section "Langues"</strong>
      </Typography>
      <Typography variant="body2">
        Cette section est essentielle pour mettre en avant vos compétences
        linguistiques, un atout important dans de nombreux secteurs. Une
        maîtrise des langues peut renforcer votre candidature, surtout si le
        poste implique des interactions internationales ou une capacité à
        comprendre des documents dans différentes langues.
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Langue : </strong>Sélectionnez la langue que vous maîtrisez
            dans la liste proposée. Si la langue n’est pas répertoriée,
            choisissez "Autre" et précisez-la dans le champ correspondant.
          </Typography>
          <Typography variant="body2">
            <strong>Niveau de maîtrise :</strong>Évaluez honnêtement votre
            niveau dans chaque langue (débutant, intermédiaire, avancé ou
            expert). Par exemple :
          </Typography>
          <Typography variant="body2">
            Débutant : Vous comprenez et utilisez des phrases simples.
          </Typography>
          <Typography variant="body2">
            Intermédiaire : Vous communiquez efficacement dans des situations
            courantes.
          </Typography>
          <Typography variant="body2">
            Avancé : Vous utilisez la langue couramment, avec aisance dans un
            contexte professionnel.
          </Typography>
          <Typography variant="body2">
            Expert : Vous êtes bilingue ou avez une maîtrise proche de celle
            d’un locuteur natif.
          </Typography>
          <Typography>
            Cette section permet aux recruteurs d'évaluer vos capacités
            linguistiques et de les associer aux exigences du poste.
            Assurez-vous que les niveaux indiqués reflètent réellement vos
            compétences pour éviter tout malentendu lors d'une éventuelle
            évaluation ou entretien.
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
