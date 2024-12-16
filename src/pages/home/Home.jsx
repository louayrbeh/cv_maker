import { useState } from "react";
import { Box, Card, Grid, Button, CardMedia } from "@mui/material";
import StepOne from "./components/step1";
import StepTwo from "./components/step2";
import StepThree from "./components/step3";
import StepFore from "./components/step4";
import StepFive from "./components/step5";
import StepSix from "./components/step6";
import StepSeven from "./components/step7";

import Infor1 from "./components/info/info1";
import Infor2 from "./components/info/info2";
import Infor3 from "./components/info/info3";
import Infor4 from "./components/info/info4";
import Infor5 from "./components/info/info5";
import Infor6 from "./components/info/info6";
import Infor7 from "./components/info/info7";
import { useNavigate } from "react-router-dom";
const FormulaireAvance = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: [],
    step6: [],
    step7: [],
  });
  const [step, setStep] = useState(1);

  const totalSteps = 7;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis", formData);
  };

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleDataChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Box>
          <Card
            sx={{
              p: 4,
              boxShadow: 3,
              minHeight: "78vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <form onSubmit={handleSubmit} style={{ flex: 1 }}>
              <Box sx={{ flexGrow: 1 }}>
                {step === 1 && (
                  <StepOne
                    data={formData.step1}
                    onChange={(data) => handleDataChange("step1", data)}
                  />
                )}
                {step === 2 && (
                  <StepTwo
                    data={formData.step2}
                    onChange={(data) => handleDataChange("step2", data)}
                  />
                )}
                {step === 3 && (
                  <StepThree
                    data={formData.step3}
                    onChange={(data) => handleDataChange("step3", data)}
                  />
                )}
                {step === 4 && (
                  <StepFore
                    data={formData.step4}
                    onChange={(data) => handleDataChange("step4", data)}
                  />
                )}
                {step === 5 && (
                  <StepFive
                    data={formData.step5}
                    onChange={(data) => handleDataChange("step5", data)}
                  />
                )}
                {step === 6 && (
                  <StepSix
                    data={formData.step6}
                    onChange={(data) => handleDataChange("step6", data)}
                  />
                )}
                {step === 7 && (
                  <StepSeven
                    data={formData.step7}
                    onChange={(data) => handleDataChange("step7", data)}
                  />
                )}
              </Box>

              {/* Navigation entre les étapes */}
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={5.5}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handlePreviousStep}
                    disabled={step === 1}
                  >
                    Précédent
                  </Button>
                </Grid>
                <Grid item xs={5.5}>
                  {step === totalSteps ? (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => navigate("/model")}
                    >
                      Soumettre
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleNextStep}
                    >
                      Suivant
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box>
          <Card sx={{ p: 4, boxShadow: 3, minHeight: "78vh" }}>
            {step === 1 && <Infor1></Infor1>}
            {step === 2 && <Infor2></Infor2>}
            {step === 3 && <Infor3></Infor3>}
            {step === 4 && <Infor4></Infor4>}
            {step === 5 && <Infor5></Infor5>}
            {step === 6 && <Infor6></Infor6>}
            {step === 7 && <Infor7></Infor7>}
            <CardMedia
              image="data:image/jpeg;base64,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"
              title="green iguana"
            />
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormulaireAvance;
