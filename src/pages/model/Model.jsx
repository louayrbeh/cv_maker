import { Box, Card, Grid, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";

// Importation des images locales
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

export default function Model() {
  // État pour gérer l'image sélectionnée
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Ouvrir la modal avec l'image sélectionnée
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Fermer la modal
  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  // Liste des images locales
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                padding: 2,
                textAlign: "center",
                cursor: "pointer",
                boxShadow: 3,
              }}
              onClick={() => handleOpen(image)}
            >
              <img
                src={image}
                alt={`Card image ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal pour afficher l'image en plein écran */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent sx={{ padding: 0, textAlign: "center" }}>
          <img
            src={selectedImage}
            alt="Full-size"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
