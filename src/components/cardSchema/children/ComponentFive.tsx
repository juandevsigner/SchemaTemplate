interface Props {
  title: string;
  backgroundColor?: string;
  subtitle: string;
}

export const ComponentFive = ({ title, backgroundColor, subtitle }: Props) => {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus,
        nesciunt quis alias reiciendis exercitationem placeat suscipit, corrupti
        vitae dignissimos porro et autem! Ad, facilis quas alias temporibus
        beatae eum.
      </p>
    </div>
  );
};
