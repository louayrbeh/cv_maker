import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Infor6() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box>
      <Typography>
        <strong>Section "Compétences"</strong>
      </Typography>
      <Typography variant="body2">
        Cette section est cruciale pour présenter vos aptitudes et domaines
        d'expertise. Elle permet aux recruteurs de comprendre vos points forts
        et de vérifier si vos compétences correspondent aux exigences du poste.
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Compétences principales :</strong>Notez ici les compétences
            spécifiques liées à votre domaine d’activité, telles que des outils,
            des langages de programmation, ou des savoir-faire techniques. Par
            exemple, pour un développeur web, cela pourrait inclure : HTML, CSS,
            JavaScript, React, Node.js.
          </Typography>
          <Typography variant="body2">
            <strong>Organisation et clarté :</strong>Formulez chaque compétence
            de manière claire et concise. Par exemple, au lieu de "Maîtrise des
            logiciels bureautiques", précisez "Microsoft Office : Excel, Word,
            PowerPoint".
          </Typography>
          <Typography variant="body2">
            <strong>Compétences transférables : </strong>N’oubliez pas d’inclure
            des compétences générales ou transférables, comme gestion de projet,
            leadership, communication, si elles sont pertinentes pour le poste.
          </Typography>
          <Typography variant="body2">
            <strong>Conseil :</strong> Limitez-vous à une liste concise (5-10
            compétences clés) pour rester pertinent et éviter une surcharge
            d’informations.
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
