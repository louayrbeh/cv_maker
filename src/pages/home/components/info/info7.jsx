import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor7() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box>
      <Typography>
        <strong>Section "Loisirs"</strong>
      </Typography>

      <Typography variant="body2">
        Les loisirs dans un CV permettent de montrer une facette plus humaine de
        votre profil et peuvent parfois refléter des compétences transférables
        utiles pour le poste. Cette section, bien que facultative, peut faire la
        différence si elle est bien choisie et pertinente.
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Pourquoi inclure vos loisirs ?</strong>Vos centres d'intérêt
            peuvent démontrer des qualités personnelles, telles que l'esprit
            d'équipe (sport collectif), la créativité (dessin, écriture) ou
            encore l'engagement (bénévolat, associations).
          </Typography>
          <Typography variant="body2">
            <strong>Soyez spécifique : </strong>Plutôt que d'écrire des termes
            vagues comme "musique" ou "sport", précisez : "Guitare acoustique",
            "Football en compétition" ou "Marathon".
          </Typography>
          <Typography variant="body2">
            <strong>Restez pertinent : </strong> Choisissez des loisirs
            susceptibles d'intéresser les recruteurs ou en lien indirect avec le
            poste. Par exemple, "photographie" peut indiquer un bon sens du
            détail, ce qui est utile dans des métiers créatifs ou techniques.
          </Typography>
          <Typography variant="body2">
            <strong>Conseil :</strong> Limitez cette section à 3-5 activités
            principales pour éviter de surcharger votre CV.
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
