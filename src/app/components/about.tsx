import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex justify-center md:gap-32 md:px-30 pb-20 md:pt-20 md:pb-0">
          <div className="hidden md:block">
            <Image
              src="/katie-young-FSE.JPG"
              alt="Katie Young, Ful-Stack Engineer"
              width={1000}
              height={1000}
              className="rounded-xl"
            />
          </div>
        <div className="px-5 md:px-10 md:text-lg">
          <div className="pb-5">
            I&apos;m a full-stack engineer who genuinely enjoys taking on
            challenges. Whether it&apos;s architecting a complex web application
            with modern tools like Next.js, React, and TypeScript, or the
            hands-on experience of building a tiny house, I&apos;m driven by the
            process of creation and problem-solving. My four years in
            fully-remote teams have honed my ability to collaborate effectively
            and deliver results independently.
          </div>
          <div>
            I&apos;m also an avid outdoors enthusiast, always up for camping,
            hiking, or kayaking – and I&apos;m really looking forward to
            experiencing Puerto Rico for the first time this year. I live in
            Richmond, VA with my two cats, Ping and April. I have a soft spot
            for all things Halloween and for cheering on the Washington Spirit!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;