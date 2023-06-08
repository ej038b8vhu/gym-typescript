import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

//motion child variants
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 w-full rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      {/* ICON */}
      <div className="mb-4 flex justify-center">
        <div className="border-gry-100 rounded-full border-2 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      {/* SLOGAN */}
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <a
        href={`#${SelectedPage.ContactUs}`}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <p>Learn More</p>
      </a>
    </motion.div>
  );
};

export default Benefit;
