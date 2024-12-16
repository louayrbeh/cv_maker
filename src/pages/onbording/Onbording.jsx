import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Onbording() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Bienvenue sur [Nom de votre projet], votre allié pour concevoir des CV professionnels adaptés aux normes internationales ! Créez un CV qui répond aux attentes locales grâce à une sélection de modèles optimisés pour chaque région, comme le CV canadien, français, et bien d'autres. Remplissez un formulaire simple et intuitif pour saisir vos expériences, compétences et informations clés. Obtenez en quelques clics un CV au format PDF, élégant et prêt à être utilisé. Nos modèles, recommandés par des experts en ressources humaines des entreprises les plus réputées, vous garantissent une présentation irréprochable auprès des recruteurs. Simplifiez la création de votre CV et démarquez-vous avec un design professionnel et adapté à vos objectifs.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        // Vérifie que le caractère existe avant de l'ajouter
        setDisplayedText((prev) => prev + (fullText[index] || ""));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Ajustez la vitesse d'affichage en modifiant cette valeur

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#2c2c2c",
          }}
        >
          🎯 Créez un CV professionnel approuvé par les recruteurs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#555",
            marginBottom: 4,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          {displayedText}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#2c2c2c",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "none",
            }}
            onClick={() => navigate("/home")}
          >
            Commencer maintenant !
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
