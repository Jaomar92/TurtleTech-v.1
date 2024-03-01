import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PriceProps {
  id: number;
  image: string;
  title: string;
  descrip: string;
  start?: string;
  monthly?: string;
  yearly?: string;
}

const PriceSection: React.FC<PriceProps> = ({
  image,
  title,
  descrip,
  id,
  start,
  monthly,
  yearly,
}) => {
  return (
    <div
      className={`${
        id % 2 === 0 ? "flex flex-row-reverse" : "flex"
      } items-stretch justify-center  m-auto md:mx-[80px]`}
    >
      <div
        className="h-[500px] w-[100%]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-[100%] flex flex-col gap-5">
        <h4 className="text-2xl font-mono">{title}</h4>
        <p style={{ whiteSpace: "pre-line" }}>{descrip}</p>
        {start || monthly || yearly ? (
          <div>
            <p>
              Prices can start as low as <strong>RM{start}</strong>
              <br />
              Monthly Maintainace of: <strong>RM{monthly}</strong>
              <br />
              Yearly Renewal of: <strong>RM{yearly}</strong>
            </p>
          </div>
        ) : (
          ""
        )}
        <p></p>
        <p></p>

        <Button variant="outline" className="font-semibold">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default PriceSection;
