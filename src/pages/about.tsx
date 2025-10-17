import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

function About() {
  return (
    <motion.section
      className="about"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2>About Me</h2>
      <p>
        I’m a passionate front-end developer who enjoys creating clean and
        functional web interfaces. I graduated with a Diploma in ICT
        Applications Development from Durban University of Technology and hold
        Cisco certifications in Cybersecurity, Networking, and Linux Unhatched.
      </p>
      <p>
        My goal is to combine design and functionality to create engaging
        digital experiences that solve real-world problems.
      </p>
    </motion.section>
  );
}

export default About;
