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
        <ProjectCard 
          title="SaCode Group Chat" 
          description="Build simple group chat"
          stack="TALL (TailwindCSS, Alpine JS, Livewire, Laravel)"
          poster="./assets/projects/group-chat.png"
          linkCode="https://github.com/obipranata/group-chat-app-livewire"
        />
      </div>
    </div>
  );
}

export default Project;