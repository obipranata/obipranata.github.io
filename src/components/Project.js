import Title from "./Title";
import Subtitle from "./Subtitle";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <div id="project" className="mt-20 lg:mt-52 text-center">
      <Title title="Projects" />
      <Subtitle subtitle="Things I’ve built so far" />
      <p className="mt-8 text-red-400 lg:hidden">scroll left 👇🏼</p>
      <div className="mt-2 lg:mt-[138px] flex lg:flex-wrap gap-4 lg:gap-12 lg:justify-center lg:overscroll-none overflow-scroll no-scrollbar">
        <ProjectCard 
          title="Pupuk Konci" 
          description="Landing page of Pupuk Konci"
          linkPreview="https://pupukkonci.com/"
          stack="Alpine JS, TailwindCSS"
          poster="./assets/projects/pupuk-konci.jpg"
          linkCode="https://github.com/obipranata/pupuk-konci"
        />
        <ProjectCard 
          title="SaCode Group Chat" 
          description="Build simple group chat"
          stack="TALL (TailwindCSS, Alpine JS, Livewire, Laravel)"
          poster="./assets/projects/group-chat.png"
          linkCode="https://github.com/obipranata/group-chat-app-livewire"
        />
        <ProjectCard 
          title="Obito Chatbot" 
          description="Simple chatbot using OpenAI API"
          linkPreview="https://obipranata.github.io/obito-chatBot/"
          stack="React JS, TailwindCSS, OpenAI API"
          poster="./assets/projects/chatbot.png"
          linkCode="https://github.com/obipranata/obito-chatBot"
        />
        <ProjectCard 
          title="Company Profile KPID PAPUA" 
          description="Website company profile of Komisi Penyiaran Indonesia Daerah Papua"
          linkPreview="https://kpid.papua.go.id/"
          stack="Bootstrap, Codeigniter 3"
          poster="./assets/projects/kpid.png"
        />
        <ProjectCard 
          title="Risu Cafe" 
          description="Catalog menu for RISU Cafe"
          linkPreview="https://obipranata.github.io/risu-cafe/"
          stack="React JS, TailwindCSS"
          poster="./assets/projects/risu.png"
          linkCode="https://github.com/obipranata/risu-cafe"
        />
      </div>
    </div>
  );
}

export default Project;