import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  LightBulbIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/suebhero.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "OUR VALUES & OUR PILLARS",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Integrity ",
      desc: "Building trust and empowering individuals within the organization and the community through ethical and transparent practices",
      icon: <ScaleIcon />,
    },
    {
      title: "Innovation",
      desc: "Fostering a culture of empowerment where everyone feels encouraged to contribute their ideas, experiment, and take risks to drive innovation.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Effectiveness",
      desc: "Empowering teams to achieve maximum output and impact by providing them with the resources, tools, and support they need to succeed",
      icon: <UserGroupIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
