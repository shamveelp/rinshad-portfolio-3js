import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const skills = [
  "Premier Pro",
  "DaVinci Resolve",
  "CapCut",
  "Canva",
  "Mobile Videography",
  "Mobile Photography",
  "Acting",
  "Script Writing",
];

function Tech() {
  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I Do</p>
        <h2 className={"sectionHeadText"}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex flex-wrap gap-4 p-8 md:px-16 mx-auto rounded-lg justify-center backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="px-6 py-3 rounded-lg dark:bg-bgPrimaryDark bg-bgPrimaryLight dark:text-ctnPrimaryDark text-ctnPrimaryLight font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
