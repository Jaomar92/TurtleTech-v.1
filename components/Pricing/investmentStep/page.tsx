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
    </div>
  );
};

export default InvestmentStep;
