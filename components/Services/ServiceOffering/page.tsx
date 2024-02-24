import { Card } from "@/components/ui/card";
import "./ServicesOffer.css";
const ServicesOffered = [
  {
    id: 1,
    name: "Website Design",
    description:
      "A crucial aspect of creating a strong online presence, website design involves the planning, conceptualization, and arrangement of content for an engaging and user-friendly online experience.",
  },
  {
    id: 2,
    name: "Hosting Services",
    description:
      "Infrasture and resources to make websites accessible online. Examples: AWS, Google Cloud, Microsoft Azure",
  },
  {
    id: 3,
    name: "Website Development",
    description:
      "The process of building and maintaining websites, including various aspects such as coding, layout and overall functionality. Key tools include React.js and WordPress - Elementor",
  },
  {
    id: 4,
    name: "SEO (Search Engine Optimization)",
    description:
      "Strategies and techniques to improve a website's visibility and rankings on search engine results pages, driving organic traffic and maximizing online presences.",
  },
  {
    id: 5,
    name: "ERP System Development",
    description:
      "Designing and implementing Enterprise Resource Planning(ERP) systems to streamline business processes, enhance efficiency, and improve overall operations.",
  },
  {
    id: 6,
    name: "Cybersecurity Software",
    description:
      "Implementing robust security measures and software solutions to protect digital assets, networks, and sensitive information from cyber threats.",
  },
  {
    id: 7,
    name: "Digital Database Capture",
    description:
      "See market sentiments analysis on people who visit your platform.",
  },
];

const ServiceOffering = () => {
  return (
    <div className="Service-bg">
      <div className="container">
        <div className="pt-8 pb-3 text-3xl font-mono">Services Offered</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
          {ServicesOffered.map((item) => {
            return (
              <Card
                className="shadow-md backdrop-blur-sm bg-white/30"
                key={item.id}
              >
                <div className="p-5 h-[200px]">
                  <div className="text-xl py-2 font-bold">{item.name}</div>
                  <div>{item.description}</div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceOffering;
