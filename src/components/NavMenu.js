const NavMenu = () => {
  return (
    <div className="flex gap-16 flex-col lg:flex-row">
      <div 
        className="flex flex-col lg:flex-row gap-16 text-xl text-[#A7A7A7]"
      >
        <a href="#home" className="hover:text-[#D9D9D9] hover:font-bold">Home</a>
        <a href="#about" className="hover:text-[#D9D9D9] hover:font-bold">About</a>
        <a href="#stack" className="hover:text-[#D9D9D9] hover:font-bold">Tech Stack</a>
        <a href="#project" className="hover:text-[#D9D9D9] hover:font-bold">Projects</a>
        <a href="#experience" className="hover:text-[#D9D9D9] hover:font-bold">Experience</a>
        <a href="#contact" className="hover:text-[#D9D9D9] hover:font-bold">Contact</a>
      </div>
      <div className="flex gap-5 items-center">
        <a href="https://github.com/obipranata" target="_blank">
          <img src="./assets/icons/github.svg" />
        </a>
        <a href="https://www.instagram.com/obipranataa/" target="_blank">
          <img src="./assets/icons/instagram.svg" />
        </a>
        <a href="https://www.linkedin.com/in/obi-pranata-47349b196/" target="_blank">
          <img src="./assets/icons/linkedin.svg" />
        </a>
      </div>
    </div>
  );
}

export default NavMenu;