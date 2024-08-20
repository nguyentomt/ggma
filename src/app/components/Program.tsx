import Image from "next/image";

export default function Program() {
  return (
    <section id="program" className="mt-56 md:mt-96 md:pt-56 pb-16 w-full md:w-1/2 flex flex-col mx-auto">
      <div id="method-container" className="flex flex-col items-center md:flex-row gap-8 pb-8">
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
            Our academic program is based on the Montessori method of education
            that recognizes and develops each child&apos;s full potential. Dr.
            Maria Montessori, an Italian physician and an educator, developed
            this method of educating the children.
          </p>
        </div>
      </div>

      <div id="environment-container" className="p-4">
        <h2 className="text-center p-4 md:pl-0 md:text-left text-3xl">The Prepared Environment</h2>

        <p className="">
          Dr. Montessori introduced the &quot;prepared environment&quot; in
          which there is concept of freedom, structure, and order. This
          &quot;prepared environment&quot; provides the opportunities where the
          child achieves inner discipline, self-management, and confidence. In a
          Montessori classroom, the children engage in activities that are real
          rather than fanciful.
        </p>
        <p className="">
          Each area of the classroom&apos;s physical environment has a specific
          and defined order as well as a sequence. The Montessori materials are
          presented and the child learns and explores at his/her own pace and
          according to his/her own interest.
        </p>

        <p className="">
          In Montessori, there are 5 areas inside the classroom, and each area
          has a specific purpose and goal:
        </p>

        <ul className=" pb-8 font-extrabold text-lg text-center md:text-left md:pl-12">
          <li>Practical Life</li>
          <li>Sensorial</li>
          <li>Language</li>
          <li>Math</li>
          <li>Culture</li>
        </ul>

        <h2 className="text-center md:text-left text-3xl p-4 md:pl-0">Extra-curriculars</h2>

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
        <button id="schedule-tour" className="px-12 py-2 mt-4 md:w-1/3 rounded-full font-bold text-lg text-yellow-200 leading-loose transition duration-400 bg-blue-600 border border-red-500 hover:bg-blue-200 hover:text-blue-700 hover:cursor-pointer">Schedule a Tour</button>
      </div>
    </section>
  );
}
