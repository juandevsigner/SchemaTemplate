interface Props {
  image: string;
}

export const ImageRender = ({ image }: Props) => {
  return (
    <div className="fadeIn" style={{ display: "flex" }}>
      <img src={image} alt={image} />
    </div>
  );
};
