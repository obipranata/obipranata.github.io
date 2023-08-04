const Hero = () => {
  return (
    <div id="about" className="mt-20 lg:mt-52 flex flex-col-reverse gap-4 lg:flex-row lg:justify-between items-center">
      <div className="font-bold text-[#D9D9D9] text-2xl lg:text-[58px] leading-snug text-center lg:text-left">
        <h1>Hi 👋,</h1>
        <h1>My Name is</h1>
        <h1 className="gradient-text">Obi Pranata</h1>
        <h1 className="typewriter">I'm Fullstack Web Developer</h1>
      </div>
      <img className="rounded-full gradient-border max-w-[250px] lg:max-w-[349px]" src="https://avatars.githubusercontent.com/u/51530301?s=400&u=33023a3ea5d2ce7357f6c3299270228c5ac52754&v=4" />
    </div>
  );
}

export default Hero;