import React from "react";
import { StepCount } from "../../hooks/StepCount";
import { IMAGE_SCHEMA } from "../../schema/imageSquema";

export const ImageSchema = () => {
  const { stepBack, stepNext, stepCount, totalStep } = StepCount(
    IMAGE_SCHEMA.length
  );
  return (
    <div>
      {IMAGE_SCHEMA.map(({ childrenProps, component: Item, step }, index) => (
        <div key={index}>
          {stepCount === step && (
            <>
              <Item {...childrenProps} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  style={{ display: `${stepCount == 1 ? "none" : "block"}` }}
                  onClick={() => stepBack(step)}
                >
                  Back
                </button>
                <button
                  style={{
                    display: `${stepCount == totalStep ? "none" : "block"}`,
                  }}
                  onClick={() => stepNext(step)}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
