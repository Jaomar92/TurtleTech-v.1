interface PriceProps {
  id: number;
  image: string;
  title: string;
  descrip: string;
}

const PriceSection: React.FC<PriceProps> = ({ image, title, descrip, id }) => {
  return <div>PriceSection</div>;
};

export default PriceSection;
