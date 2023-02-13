import React, { useState } from "react";

export const StepCount = (totalStep: number) => {
  const [stepCount, setStepCount] = useState(1);

  const stepNext = (value: number) => {
    setStepCount(value + 1);
  };

  const stepBack = (value: number) => {
    setStepCount(value - 1);
  };

  return {
    stepCount,
    stepNext,
    stepBack,
    totalStep,
  };
};
