import React from "react";
interface Props {
  title: string;
  backgroundColor: string;
  subtitle: string;
}

export const ComponentThree = ({ title, backgroundColor, subtitle }: Props) => {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
