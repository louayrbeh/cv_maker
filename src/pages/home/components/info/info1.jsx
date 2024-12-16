import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

export default function Infor1() {
  // État pour afficher ou cacher les typographies supplémentaires
  const [showMore, setShowMore] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus >>"
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box>
      <Typography>
        <strong>Section : "Informations de contact" </strong>
      </Typography>
      <Typography variant="body2">
        Cette section est essentielle, car elle permet aux recruteurs de vous
        identifier rapidement et de vous contacter. Remplissez soigneusement vos
        informations personnelles.
      </Typography>
      {showMore && (
        <>
          <Typography variant="body2">
            <strong>Nom et prénom :</strong> Assurez-vous que vos nom et prénom
            sont écrits correctement et sans erreur.
          </Typography>
          <Typography variant="body2">
            <strong>Titre :</strong> Mentionnez un titre professionnel qui
            résume votre profil, comme "Développeur Web" ou "Ingénieur
            Logiciel". Cela attire l'attention des recruteurs.
          </Typography>
          <Typography variant="body2">
            <strong>Email :</strong> Fournissez une adresse email
            professionnelle et active pour que les recruteurs puissent
            facilement vous joindre.
          </Typography>
          <Typography variant="body2">
            <strong>Adresse :</strong> Indiquez votre adresse actuelle pour
            donner une idée de votre localisation (utile si le poste nécessite
            une proximité géographique).
          </Typography>
          <Typography variant="body2">
            <strong>Numéro de téléphone :</strong> Ajoutez un numéro de
            téléphone valide pour des contacts rapides.
          </Typography>
          <Typography variant="body2">
            <strong>Date de naissance :</strong> Fournissez votre date de
            naissance si elle est demandée par le recruteur ou nécessaire pour
            le contexte professionnel.
          </Typography>
          <Typography>
            Ajoutez également une photo professionnelle si vous le souhaitez,
            car elle peut renforcer l’impact visuel de votre CV. Enfin, les
            champs supplémentaires vous permettent d'ajouter d'autres
            informations pertinentes, comme un lien vers votre site web ou votre
            profil LinkedIn. Renseignez ces données avec soin pour renforcer
            l’image professionnelle de votre CV.
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
