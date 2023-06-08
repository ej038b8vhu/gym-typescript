import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5 outline-secondary-500`;

  //react-hook-form hook
  const {
    register, //register form field
    trigger, //validate the form if needed
    formState: { errors }, //for error use
  } = useForm();

  //'any' used on you are not sure what type its gonna be
  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Ligula erat habitant mattis posuere placerat elit tempus ipsum
            efficitur. Elit eleifend arcu semper placerat amet senectus porta
            sodales id tristique euismod. Vehicula congue est efficitur natoque
            ultrices mi vestibulum lectus tempor phasellus.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <form
              method="POST"
              target="_blank"
              onSubmit={handleSubmit}
              //https://formsubmit.co receive submit from your own email
              action={`https://formsubmit.co/${
                import.meta.env.VITE_FORMSUBMIT_ID
              }`}
            >
              {/* NAME */}
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                //register input field and set validation rule for react-hook-form
                {...register("name", { required: true, maxLength: 100 })}
              />
              {/* setting error base on rule set above for name */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              {/* EMAIL */}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              {/* MESSAGE */}
              <textarea
                className={`${inputStyles} resize-none`}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {/* BACKGROUND TEXT IMAGE */}
            <div className="before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
