import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import ActionButton from "@/shared/ActionButton";

//tell typescript what type this is and definde in shared ts file
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Ipsum velit euismod inceptos sociosqu",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Iaculis magna dapibus maximus sit",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Scelerisque imperdiet senectus nisl mollis",
  },
];

//motion parent container
const container = {
  hidden: {},
  visible: {
    //each child appear time gap
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto  min-h-full w-5/6 py-10 md:mt-32">
      <motion.div //use motion instead of div because onViewportEnter using
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5">
            Maecenas consectetuer lectus neque auctor maximus molestie volutpat.
            Euismod in erat nec vulputate hac volutpat sagittis lacinia platea
            odio aliquet. Nulla curae turpis adipiscing ante potenti facilisi
            letius si sociosqu.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-6 gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="md:flex md:items-center md:gap-16">
          {/* GRAPHIC */}
          <img src={BenefitsPageGraphic} alt="" className="mx-auto my-16" />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <div className="before:absolute before:-left-16 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>{" "}
                </HText>
              </div>
            </motion.div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <p className="my-5">
                Phasellus mattis letius sem ultrices lacus mus euismod augue
                ligula lacinia. Cras tristique habitasse ante in conubia
                facilisis sed. Sapien himenaeos curae si venenatis cursus.
              </p>
              <p className="mb-5">
                Vitae tortor ultricies eu sem dolor adipiscing conubia vivamus.
                Quam pellentesque donec consectetuer tempus aliquet primis.
                Imperdiet tellus pellentesque amet class nisl nunc senectus
                mauris donec metus.
              </p>
            </motion.div>

            {/* BUTOON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
