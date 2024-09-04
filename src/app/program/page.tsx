import Image from "next/image";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Program() {
  return (
    <section
      id="program"
      className="pb-16 w-full text-justify md:w-3/4 flex flex-col mx-auto"
    >
      <div
        id="method-container"
        className="flex flex-col items-center md:flex-row gap-8 pb-8 "
      >
        <div id="left-program" className="w-1/2 md:w-5/6 ">
          <Image
            src="/maria-montessori.jpeg"
            alt="Maria Montessori"
            layout="object-contain"
            height={514}
            width={392}
            className="border border-black rounded-full mt-8"
          />
        </div>
        <div id="right-program">
          <h1 className="text-3xl text-center pt-4">Montessori Method</h1>
          <p className="p-4 md:pb-8 text-xl">
            The Montessori Method is a child-centered educational approach
            developed by Dr. Maria Montessori over a century ago. It is designed
            to foster independence, creativity, and a lifelong love of learning.
            Unlike traditional education models, the Montessori Method allows
            children to learn at their own pace, discover their interests, and
            develop their full potential in a supportive, carefully prepared
            environment.
          </p>

          <p className="p-4 md:pb-8 text-xl">
            In our Montessori classrooms, children are provided with hands-on
            learning experiences that are specifically tailored to their
            developmental stages. The Montessori philosophy believes that every
            child is a unique individual with a natural curiosity and a desire
            to learn. Our role as educators is to guide and support their
            learning journey, encouraging exploration, critical thinking, and
            problem-solving skills.
          </p>
        </div>
      </div>

      <div id="environment-container" className="p-4">
        <h2 className="text-center p-4 md:pl-0 md:text-left text-3xl">
          Program Outline
        </h2>

        <p className="">
          At Garden Grove Montessori Academy, we offer a comprehensive
          Montessori program for children aged 2-6 years, focusing on the
          holistic development of each child. Our program is structured around
          five core areas of learning:
        </p>

        <div className=" pb-8 font-extrabold text-lg md:text-left md:pl-12">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. Practical Life Skills
            </AccordionSummary>
            <AccordionDetails>
              <dd className="font-normal">
                In this area, children engage in activities that help them
                develop independence, coordination, concentration, and a sense
                of responsibility. Tasks such as pouring, spooning, tying
                shoelaces, and caring for plants teach children essential life
                skills and help them build confidence.
              </dd>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              2. Sensorial Activities
            </AccordionSummary>
            <AccordionDetails>
              <dd className="font-normal">
                The sensorial curriculum is designed to help children refine
                their senses and improve their ability to observe and classify
                their surroundings. Using specially designed materials, children
                explore concepts such as size, color, shape, texture, and sound.
              </dd>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Language Development
            </AccordionSummary>
            <AccordionDetails>
              <dd className="font-normal">
                Our language program nurtures early literacy skills through a
                variety of activities that include storytelling, phonics,
                reading, and writing. Children are encouraged to express
                themselves and develop their communication skills at their own
                pace, building a strong foundation for future learning.
              </dd>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              4. Mathematics
            </AccordionSummary>
            <AccordionDetails>
              <dd className="font-normal">
                Montessori mathematics introduces children to the world of
                numbers through hands-on materials that make abstract concepts
                tangible. Children learn to count, recognize numbers, understand
                the decimal system, and develop problem-solving skills in a way
                that is engaging and meaningful.
              </dd>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              5. Cultural Studies
            </AccordionSummary>
            <AccordionDetails>
              <dd className="font-normal">
                This area includes geography, history, science, art, and music.
                Children explore the world around them, learn about different
                cultures, and develop an appreciation for the diversity of life.
                Cultural studies also include lessons on nature, seasons, and
                the environment, fostering a sense of wonder and respect for our
                planet.
              </dd>
            </AccordionDetails>
          </Accordion>
        </div>

        <h2 className="text-center md:text-left text-3xl p-4 md:pl-0">
          Extra-curriculars
        </h2>

        <p className="">
          Besides our education program, we also have other extra curricular
          activities for children like Karate class, Dance class, and we also
          have a very large playground where kids can get their physical
          exercise.
        </p>

        <p>
          So call us now and setup the tour of our facility and get your child
          started on a path to an all-rounded development and growth.
        </p>

        <h2 className="text-center p-4 md:pl-0 md:text-left text-3xl">
          Why Choose Garden Grove Montessori Academy?
        </h2>

        <p className="">
          At Garden Grove Montessori Academy, we are dedicated to creating a
          nurturing, inclusive, and stimulating environment where your child can
          thrive. Our experienced Montessori-certified educators are passionate
          about guiding children on their individual learning paths and helping
          them build the skills they need for future success.
        </p>

        <p className="">
          We believe that the early years are critical for setting the
          foundation for a lifetime of learning and personal growth. Our
          Montessori program is designed to honor your child's unique qualities
          and encourage them to become independent, confident, and joyful
          learners.
        </p>

        <h2 className="text-center p-4 md:pl-0 md:text-left text-3xl">
          Enroll Your Child Today
        </h2>

        <p className="mb-8">
          Give your child the gift of a Montessori education at Garden Grove
          Montessori Academy. Contact us today to learn more about our program,
          schedule a tour, or enroll your child. We look forward to welcoming
          you and your family into our community!
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="/contact"
            id="schedule-tour"
            className="px-24 md:px-36 py-3 rounded-full font-bold text-lg text-white leading-loose transition duration-400 bg-blue-600 hover:bg-blue-100 hover:text-blue-900 hover:cursor-pointer"
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
