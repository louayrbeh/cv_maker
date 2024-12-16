// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f7f7", // Couleur de fond
          borderRadius: "8px", // Coins arrondis
          "& .MuiOutlinedInput-root": {
            color: "#3f51b5", // Couleur du texte
            "& fieldset": {
              borderColor: "#000000", // Bordure par défaut
            },
            "&:hover fieldset": {
              borderColor: "#3f51b5", // Bordure au survol
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3f51b5", // Bordure en focus
            },
          },
          "& .MuiInputLabel-root": {
            color: "#000000", // Couleur du label par défaut
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#3f51b5", // Couleur du label en focus
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Désactiver la majuscule par défaut
          borderRadius: "8px", // Coins arrondis
          padding: "10px 20px", // Espacement interne
          fontWeight: "bold", // Texte en gras
          boxShadow: "none", // Désactiver l'ombre par défaut
          "&:hover": {
            backgroundColor: "#3f51b5", // Couleur de fond au survol
            color: "#ffffff", // Couleur du texte au survol
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Ombre au survol
          },
          "&.Mui-disabled": {
            backgroundColor: "#cccccc", // Couleur pour un bouton désactivé
            color: "#666666", // Texte pour un bouton désactivé
          },
        },
        contained: {
          backgroundColor: "#3f51b5", // Couleur de fond des boutons "contained"
          color: "#ffffff", // Couleur du texte des boutons "contained"
          "&:hover": {
            backgroundColor: "#303f9f", // Couleur au survol
          },
        },
        outlined: {
          borderColor: "#3f51b5", // Bordure des boutons "outlined"
          color: "#3f51b5", // Couleur du texte
          "&:hover": {
            backgroundColor: "#f1f1f1", // Fond clair au survol
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f7f7", // Fond du bouton
          borderRadius: "50%", // Forme circulaire
          padding: "10px", // Espacement interne
          color: "#3f51b5", // Couleur de l'icône par défaut
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Ombre douce
          transition: "background-color 0.3s, color 0.3s", // Transition douce pour les changements de couleur

          // Effet au survol
          "&:hover": {
            backgroundColor: "#e0e0e0", // Couleur de fond au survol
            color: "#303f9f", // Couleur de l'icône au survol
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Ombre plus prononcée au survol
          },

          // Effet quand l'icône est activée
          "&:active": {
            backgroundColor: "#d3d3d3", // Fond lorsque le bouton est activé
          },

          // Icône désactivée
          "&.Mui-disabled": {
            color: "#bdbdbd", // Icône grise lorsqu'elle est désactivée
            backgroundColor: "#e0e0e0", // Fond gris clair lorsqu'elle est désactivée
            boxShadow: "none", // Pas d'ombre pour l'icône désactivée
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto", // Police par défaut
          color: "#333", // Couleur principale
        },
        h1: {
          fontSize: "2.5rem", // Taille pour les titres H1
          fontWeight: 700, // Poids en gras
          color: "#3f51b5",
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 600,
          color: "#3f51b5",
        },
        body1: {
          fontSize: "1rem", // Texte standard
          fontWeight: 400,
          lineHeight: 1.6, // Espacement entre les lignes
          color: "#555", // Couleur secondaire
        },
        body2: {
          fontSize: "0.95rem",
          fontWeight: 300,
          color: "#333",
        },
        caption: {
          fontSize: "0.75rem", // Taille des légendes
          fontWeight: 300,
          color: "#999",
        },
      },
    },
  },
});

export default theme;
