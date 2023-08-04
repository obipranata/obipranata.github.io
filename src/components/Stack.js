import Title from "./Title";
import Subtitle from "./Subtitle";
const Stack = () => {
  return (
    <div id="stack" className="mt-20 lg:mt-52 text-center">
      <Title title="My Tech Stack" />
      <Subtitle subtitle="Technologies I’ve been working with recently" />
      <p className="mt-8 text-red-400 lg:hidden">scroll left 👇🏼</p>
      <div className="lg:mt-[138px] flex lg:flex-wrap gap-4 lg:gap-24 lg:justify-center lg:overscroll-none overflow-scroll no-scrollbar">
        <img src="./assets/stacks/Laravel.svg" />
        <img src="./assets/stacks/livewire.svg" />
        <img src="./assets/stacks/alpine.svg" />
        <img src="./assets/stacks/js.svg" />
        <img src="./assets/stacks/react.svg" />
        <img src="./assets/stacks/tailwind.svg" />
      </div>
    </div>
  );
}

export default Stack;