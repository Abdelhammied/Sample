import { Stack } from "@mui/material";
import React, { ReactElement } from "react";
import StepItem from "./StepItem/StepItem";

interface Props {
  steps: string[];
  currentStep: string;
  stepWasClicked: (step: string) => void;
}

export default function Stepper({
  steps,
  currentStep,
  stepWasClicked,
}: Props): ReactElement {
  return (
    <Stack flexDirection="row">
      {steps.map((step) => (
        <StepItem
          key={step}
          step={step}
          isActive={step === currentStep}
          stepWasClicked={stepWasClicked}
        />
      ))}
    </Stack>
  );
}
