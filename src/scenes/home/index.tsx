import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gpa-16 md:pb:0 bg-gray-20 py-36 md:h-full">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center md:flex"
        //make navbar active state switch automatically
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className=" md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
              <img src={HomePageText} alt="home-page-text" />
            </div>
            <p className="p-2">
              Maecenas praesent cras bibendum fringilla massa tempor purus
              nostra per nunc parturient. Sociosqu nunc rutrum luctus ornare
              tristique arcu magnis. Tristique laoreet volutpat dignissim nullam
              semper pharetra etiam mus nunc vivamus.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-4 flex items-center gap-6 p-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <a
              href={`#${SelectedPage.ContactUs}`}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              <p>Learn More</p>
            </a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-[10]">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      <div className="hidden items-center justify-start gap-16 bg-primary-100 px-32 py-10 md:flex">
        <img src={SponsorRedBull} alt="redbull-sponsor" />
        <img src={SponsorForbes} alt="forbes-sponsor" />
        <img src={SponsorFortune} alt="fortune-sponsor" />
      </div>
    </section>
  );
};

export default Home;
