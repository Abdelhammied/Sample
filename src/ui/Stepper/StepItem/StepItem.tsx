import React, { ReactElement } from "react";
import { StyledStepItem } from "./styls";

interface Props {
  step: string;
  isActive: boolean;
  stepWasClicked: (step: string) => void;
}

export default function StepItem({
  step,
  isActive,
  stepWasClicked,
}: Props): ReactElement {
  return (
    <StyledStepItem
      onClick={() => !isActive && stepWasClicked(step)}
      isActive={isActive}
    >
      {step}
    </StyledStepItem>
  );
}
