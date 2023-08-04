const ExperienceCard = ({title, description, date, logo}) => {
  return (
    <div className="rounded-lg pb-6 w-[80%] flex-none lg:max-w-[375px] bg-[#363636] text-[#ccc] border border-[#ccc]">
      <img className="rounded-t-lg w-full" src={logo} />
      <div className="mt-7 px-7 text-left">
        <h1 className="font-medium text-xl lg:text-[28px] leading-10">{title}</h1>
        <p className="mt-4 text-sm lg:text-lg leading-[26px]">
          {description}
        </p>
        <p className="text-base font-normal mt-3">{date}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;