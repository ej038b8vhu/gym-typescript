import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";
import HText from "@/shared/HText";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

//some props(description) are optional
const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Quisque rhoncus aliquam cubilia imperdiet, Taciti orci urna pulvinar congue diam. Congue et sapien mi magnis ante proin inceptos blandit. Nostra metus luctus aliquet ligula a class.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Curae ullamcorper semper dignissim augue, Primis non hendrerit mollis ad euismod pellentesque. Aenean leo iaculis id lacus magnis ut nunc maecenas finibus etiam. Tempor maximus potenti mauris lectus id feugiat proin turpis si.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Placerat fames risus eget porta, Per ultrices enim nostra montes platea nullam letius purus venenatis. Auctor consectetuer velit cras fringilla fusce libero habitasse sem parturient. Lobortis nisl morbi risus dolor semper adipiscing tellus imperdiet.",
    image: image4,
  },
  {
    name: "Fitness Training Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Amet senectus dis si in, Tristique magnis vehicula luctus letius penatibus. Arcu nec efficitur nulla ipsum suspendisse at congue. Nostra auctor etiam neque nam lacus hendrerit massa erat conubia integer.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="mt-12 bg-primary-100 py-24 md:-mt-12">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
      >
        {/* TITLE */}
        <div className="w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5">
            Fringilla facilisis purus sagittis sociosqu tempus cras aptent
            consequat ligula laoreet libero. Ullamcorper suspendisse
            pellentesque finibus nullam letius rutrum orci volutpat proin
            efficitur. Commodo conubia accumsan erat nibh potenti massa porta
            vitae eu pede.
          </p>
        </div>

        {/* SIDE SCROLLING */}
        <div className="mt-10 h-[340px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}}`}
                name={item.name}
                image={item.image}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
