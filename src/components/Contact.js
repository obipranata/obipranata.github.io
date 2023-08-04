const Contact = () => {
  return (
    <div id="contact" className="flex justify-center lg:justify-between items-center mt-48">
      <a href="" className="hidden lg:block">
        <h1 className="gradient-text text-4xl font-bold">obito</h1>
      </a>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-16 items-center">
        <div className="text-xl text-[#A7A7A7]">
          <a href="">obiimanuelpranata@gmail.com</a>
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
    </div>
  );
}

export default Contact;