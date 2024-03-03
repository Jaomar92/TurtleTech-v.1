import PriceSection from "./PriceSection";

const companyDigi = [
  {
    id: 1,
    name: "People",
    descrip:
      "Companies need employees who can understand business problems and implement solutions aligned with digital transformation goals.",
  },
  {
    id: 2,
    name: "Technology",
    descrip:
      "Businesses on a digital transformation journey need the right technologies that help solve technical problems they encounter on the journey.",
  },
  {
    id: 3,
    name: "Culture",
    descrip:
      "Failure to adapt to a new digital culture can lead to failure. It is essential to implement an effective change management framework.",
  },
  {
    id: 4,
    name: "Customers",
    descrip:
      "Customers today expect brands to offer personalized digital experiences across touchpoints and demand quicker service delivery.",
  },
  {
    id: 5,
    name: "Market Conditions",
    descrip:
      "Digital transformation threatens to leave anyone who doesn’t adopt it behind. But it lends competitive advantage and improves efficiency.",
  },
  {
    id: 6,
    name: "Innovation",
    descrip:
      "A digital transformation journey most often involves identifying how best to integrate emerging technology into current systems.",
  },
];

const InvestmentStep = () => {
  return (
    <div className="container py-5">
      <h2 className="font-mono text-3xl pb-3 text-center md:text-left">
        The 8 Stages
      </h2>
      <p className="text-lg font-sans text-center md:text-left">
        Your company or brand digitalization will depend on a variaty of
        factors.
      </p>
      <div className="py-3">
        <ul className="text-lg font-sans text-center md:text-left">
          {companyDigi.map((item) => {
            return (
              <li key={item.id} className="py-2">
                <p>
                  <strong>{item.name}:</strong> {item.descrip}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-lg font-sans">
        The order of which will depend on your objectives.
        <br />
        But we will assume you are at zero.
      </p>
      <div className="py-2">
        <PriceSection
          image={"/Assets/Pricing/Website.svg"}
          title={"Gathering Awareness"}
          descrip={`First step is having people find you on the internet.\n\nThis could start by have a 3 page website.\n\n 1.Home\n2.Services\n3.Contact`}
          id={1}
          start={"500"}
          monthly={"120"}
          yearly={"300"}
        />
        <PriceSection
          image={"/Assets/Pricing/Plan.svg"}
          title={"Digital Plan"}
          descrip={`Lets say that since creating and establishing a website has brought in more businesses and you are looking for better efficientcy. We'll carry out the initial study for a digitalization plan.\n\n This will require a perliminary study subject to a Non-Disclosure-Agreement so your trade secrets and process are kept safe.\n\n We'll look into operations, Technologies to impliment and processes to streamline your business.\n\n We'll provide a proposal with quotation to open more discussions.`}
          id={2}
        />
        <PriceSection
          image={"/Assets/Pricing/Server.svg"}
          title={"Digital Plan - Implementation (Database)"}
          descrip={`Establishing a sort of Data-center will be a priority at this point before any project can be implemented. This will be where all project implementation will be derived from.\n\n There are a viarty of sources of data-bases that will not require inhouse infrastructure making cost cheaper such as:- \n\n 1. MongoDB-Cloud \n 2.Supabase- Cloud \n3.MySQL - webhosting provider \n\n Prices can vary from RM100 to RM10,000 a month`}
          id={3}
        />
        <PriceSection
          image={"/Assets/Pricing/Control.svg"}
          title={"Control"}
          descrip={`Here we begin we gain the ability of data structure manipulation and what we can infer from them. Giving the ability to create company dashboards to track KPI's and performance`}
          id={4}
          start={"800"}
          monthly={"500"}
          // yearly={"300"}
        />
      </div>
    </div>
  );
};

export default InvestmentStep;
