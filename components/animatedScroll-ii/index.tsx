"use client";

// Define your interfaces for TypeScript
interface CompanyItem {
  company: string;
}

interface AnimatedScrollProps {
  items: CompanyItem[];
}

// The AnimatedScroll2 component
const AnimatedScroll2: React.FC<AnimatedScrollProps> = ({ items }) => {
  // Duplicate the items for a seamless loop
  const scrollingItems = [...items]; // Adjust duplication as needed based on your item count and viewport width

  return (
    <div className="">
      <div className="max-w-4xl inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {scrollingItems.map((item, index) => (
            <li
              key={index}
              className="whitespace-nowrap text-3xl font-extrabold text-gray-500 mx-8"
            >
              {item.company}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {scrollingItems.map((item, index) => (
            <li
              key={index}
              className="whitespace-nowrap text-3xl font-extrabold text-gray-500 mx-8"
            >
              {item.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedScroll2;
