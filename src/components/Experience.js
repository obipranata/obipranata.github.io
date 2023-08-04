import Title from "./Title";
import Subtitle from "./Subtitle";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="mt-20 lg:mt-52 text-center">
      <Title title="Experience" />
      <Subtitle subtitle="My experience" />
      <div className="mt-8 lg:mt-[138px] flex lg:flex-wrap gap-4 lg:gap-12 justify-center lg:overscroll-none overflow-scroll no-scrollbar">
        <ExperienceCard title="Far Capital Malaysia" description="Junior Developer" date="Feb 2023 - Present" logo="./assets/experiences/far.png" />
      </div>
    </div>
  );
}

export default Experience;