import InfenetScrollCarousel from "./components/infenetScrollCarousel";
import AnimatedScroll from "@/components/animatedScroll";
const Testimonials = () => {
  return (
    <div>
      <div className="container ">
        <div className="text-3xl font-mono pt-5 pb-2">
          What Our Clients Have to Say
        </div>
        <div className="py-5 h-fit  my-12">
          <InfenetScrollCarousel />
        </div>
        <div className="my-12 flex items-center justify-center">
          <AnimatedScroll />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
