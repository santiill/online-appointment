import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Form } from "react-bootstrap";
import Personalization from "../Personalization";
import Experts from "../Experts";
import Calendarr from "../Calendar";
import Appointments from "../Appointments";

const steps = [
  "Ваши данные",
  "Ваши записи",
  "Выберите специалиста",
  "Выбор даты",
];

export default function Steppers() {
  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const stepContentMap = {
    1: <Personalization next={handleNext} />,
    2: <Appointments next={handleNext} />,
    3: <Experts next={handleNext} />,
    4: <Calendarr next={handleNext} />,
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    //   // You probably want to guard against something like this,
    //   // it should never occur unless someone's actively trying to break something.
    //   throw new Error("You can't skip a step that isn't optional.");
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //   const newSkipped = new Set(prevSkipped.values());
    //   newSkipped.add(activeStep);
    //   return newSkipped;
    // });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper className="mb-4 mt-4" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 3 }}>
            <h5>Вы успешно записались на прием к врачу!</h5>
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <hr /> */}
          <div className="mt-4 mb-4">{stepContentMap[activeStep + 1]}</div>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button> */}
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Продолжить"}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
