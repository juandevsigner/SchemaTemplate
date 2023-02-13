import { SCHEMA_TEST } from "../../schema/schemaTest";
import { StepCount } from "../../hooks/StepCount";

const CardSchema = () => {
  const { stepBack, stepCount, stepNext, totalStep } = StepCount(
    SCHEMA_TEST.length
  );

  return (
    <div
      style={{
        borderRadius: "15px",
        backgroundColor: "white",
        overflow: "hidden",
        padding: "15px",
      }}
    >
      {SCHEMA_TEST.map(({ childrenProps, component: Item, step }, index) => (
        <div key={index}>
          {stepCount === step ? (
            <>
              <Item {...childrenProps} />
              <div style={{ display: "flex", gap: 5 }}>
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
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CardSchema;
